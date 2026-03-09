# Holographic Business Card Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild ContactBox as a premium holographic business card with 3D tilt, iridescent shimmer, and cursor-following light reflection.

**Architecture:** Single component rewrite of `ContactBox.tsx`. Mouse tracking state drives 3 visual layers (tilt transform, shimmer gradient, spotlight) via inline styles. No new dependencies — pure CSS transforms + React mouse event handlers. Mobile falls back to a subtle CSS animation.

**Tech Stack:** React 18, Framer Motion (existing), Tailwind CSS 4, CSS transforms/gradients

**Design doc:** `docs/plans/2026-03-09-contact-holographic-card-design.md`

---

### Task 1: Rewrite ContactBox Layout (Asymmetric Editorial)

**Files:**
- Modify: `src/components/Contact/ContactBox.tsx`

**Step 1: Rewrite the component with new layout**

Replace the entire `ContactBox.tsx` with the new asymmetric editorial layout. Key changes:

- Remove `useTheme` import and `isDark` usage
- Title changes to "Software & AI Engineer"
- Layout becomes asymmetric: left side has PFP + title row at top, large stacked name below; right side has links + signature
- Card enforces 1.5:1 aspect ratio via `aspect-[3/2]`
- Card background stays `#fafaf9`, border `#e5e5e5`
- PFP gets chrome ring (2px gradient border via a wrapper div)
- Name uses Instrument Serif with chrome gradient text
- Separator line gets metallic gradient
- Keep pin, signature, copy button, BlurFade wrapper, SplitText animations

```tsx
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconNotebook,
  IconPointer,
} from '@tabler/icons-react';
import { useCallback, useRef, useState } from 'react';
import PFP from '../../assets/creds/pfp.webp';
import Pin from '../../assets/creds/pin.webp';
import BlurFade from '../../blocks/Animations/BlurFade';
import SplitText from '../../blocks/TextAnimations/SplitText';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { Signature } from '../signature';

const ContactBox = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('daffa@abhipraya.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  // 3D tilt: max ±10 degrees
  const tiltX = isHovered ? (mousePos.y - 0.5) * -20 : 0;
  const tiltY = isHovered ? (mousePos.x - 0.5) * 20 : 0;

  const links = [
    {
      icon: IconMail,
      text: 'daffa@abhipraya.dev',
      href: 'mailto:daffa@abhipraya.dev',
      copyable: true,
    },
    {
      icon: IconBrandLinkedin,
      text: 'linkedin.com/in/daffaabhipraya',
      href: 'https://linkedin.com/in/daffaabhipraya',
    },
    {
      icon: IconBrandGithub,
      text: 'github.com/absolutepraya',
      href: 'https://github.com/absolutepraya',
    },
    {
      icon: IconNotebook,
      text: 'blog.abhipraya.dev',
      href: 'https://blog.abhipraya.dev',
    },
  ];

  return (
    <BlurFade
      className='relative z-20 flex w-[90vw] flex-col rounded-3xl border-contact-outer-border xl:h-112 xl:w-272 xl:max-w-4000 xl:flex-row'
      delay={0.3}
      inView
      offset={20}
    >
      {/* Left side: "Always up for..." — unchanged, lives in parent */}
      {/* This component is just the card on the right side */}

      <div className='flex w-auto flex-col items-center justify-center space-y-4 p-8 md:p-12'>
        <p className='w-full text-start font-instrument text-5xl md:-translate-x-8 md:text-center md:text-6xl xl:translate-x-0 xl:text-start'>
          Always up for...
        </p>
        <div className='flex w-full flex-col space-y-2 font-semibold text-4xl md:w-auto md:space-y-3 md:text-5xl'>
          <div className='flex items-center space-x-3 pl-0'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className='fill-white text-black'
            />
            <SplitText animateBy='letters' text='AI solutions' />
          </div>
          <div className='flex items-center space-x-3 pl-6 md:pl-12'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className='fill-white text-black'
            />
            <SplitText animateBy='letters' text='competitions' />
          </div>
          <div className='flex items-center space-x-3 pl-12 md:pl-24'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className='fill-white text-black'
            />
            <SplitText animateBy='letters' text='opportunities' />
          </div>
        </div>
      </div>

      <BlurFade
        className='flex w-full flex-col items-center justify-center space-y-2 p-6 xl:w-1/2'
        delay={desktopView ? 0.8 : 0.3}
        inView
        offset={30}
      >
        {/* The holographic card */}
        <div
          ref={cardRef}
          className='relative w-full max-w-120 cursor-default select-none overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#fafaf9] shadow-lg transition-shadow duration-300 hover:shadow-xl md:max-w-130'
          style={{
            aspectRatio: '3 / 2',
            transform: isHovered
              ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
              : 'perspective(800px) rotate(-2deg)',
            transition: isHovered
              ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
              : 'transform 0.4s ease-out, box-shadow 0.3s ease',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Layer 2: Holographic shimmer overlay */}
          <div
            className='pointer-events-none absolute inset-0 z-10 rounded-2xl mix-blend-overlay'
            style={{
              background: `linear-gradient(
                ${110 + (mousePos.x - 0.5) * 60}deg,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 20%,
                rgba(200, 220, 255, 0.15) 40%,
                rgba(255, 200, 255, 0.1) 60%,
                rgba(200, 255, 220, 0.12) 80%,
                transparent 100%
              )`,
              opacity: isHovered ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Layer 3: Light reflection / spotlight */}
          <div
            className='pointer-events-none absolute inset-0 z-20 rounded-2xl'
            style={{
              background: isHovered
                ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
                : 'none',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Pin decoration */}
          <img
            src={Pin}
            alt='Pin'
            className='absolute -top-12 -right-10 z-30 w-16 scale-[85%] drop-shadow-md md:scale-90'
            draggable='false'
          />

          {/* Card content */}
          <div className='relative z-5 flex h-full flex-col justify-between p-7 md:p-8'>
            {/* Top row: PFP + Title */}
            <div className='flex items-center space-x-3'>
              {/* PFP with chrome ring */}
              <div className='shrink-0 rounded-full bg-gradient-to-br from-[#c0c0c0] via-[#e8e8e8] to-[#a0a0a0] p-[2px]'>
                <img
                  src={PFP}
                  alt='Profile'
                  className='h-11 w-11 rounded-full object-cover grayscale transition duration-200 hover:grayscale-0'
                  draggable='false'
                />
              </div>
              <p className='font-inter text-xs tracking-widest text-[#6b6b78] uppercase'>
                Software & AI Engineer
              </p>
            </div>

            {/* Middle: Name (left) + Links (right) */}
            <div className='flex flex-1 items-end justify-between gap-4 pt-2'>
              {/* Large name — chrome gradient */}
              <div>
                <h3
                  className='font-instrument text-4xl leading-[1.1] md:text-5xl'
                  style={{
                    background:
                      'linear-gradient(135deg, #b0b0b0, #e0e0e0, #909090, #d0d0d0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Daffa
                  <br />
                  Abhipraya
                </h3>
              </div>

              {/* Links column */}
              <div className='flex flex-col items-end space-y-1.5'>
                {links.map((link) => (
                  <div
                    key={link.text}
                    className='flex items-center space-x-1.5'
                  >
                    <link.icon
                      size={14}
                      stroke={1.8}
                      className='shrink-0 text-[#6b6b78]'
                    />
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='font-jetbrainsmono text-[#1a1a2e] text-[11px] underline-offset-3 transition-colors hover:text-[#3643FC] hover:underline md:text-xs'
                    >
                      {link.text}
                    </a>
                    {link.copyable && tabletView && (
                      <button
                        type='button'
                        className='ml-0.5 rounded-md p-0.5 text-[#6b6b78] transition-colors hover:cursor-pointer hover:bg-[#e5e5e5] hover:text-[#1a1a2e]'
                        onClick={handleCopy}
                        title='Copy email'
                      >
                        {copied ? (
                          <IconCheck size={12} stroke={2} />
                        ) : (
                          <IconCopy size={12} stroke={2} />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Metallic separator + Signature */}
            <div className='flex items-end justify-between pt-2'>
              <div
                className='h-px flex-1 mr-4'
                style={{
                  background:
                    'linear-gradient(90deg, #c0c0c0, #e8e8e8, #a0a0a0, #d4d4d4)',
                }}
              />
              <Signature
                text='Abhipraya'
                fontSize={32}
                color='#1a1a2e'
                duration={1.5}
                className='h-8 shrink-0'
                inView
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </BlurFade>
  );
};

export default ContactBox;
```

**Step 2: Run lint and dead code check**

Run: `bun run check && bun run knip`
Expected: PASS — no lint errors, no dead code

**Step 3: Visual QA in browser**

Run: `bun run dev`
Check:
- Card renders with 1.5:1 aspect ratio
- Asymmetric layout: PFP+title top-left, large name bottom-left, links right, signature bottom-right
- Chrome gradient on name text
- Chrome ring around PFP
- Metallic separator line
- Pin decoration top-right

**Step 4: Commit**

```bash
git add src/components/Contact/ContactBox.tsx
git commit -m "feat: rewrite contact card with asymmetric editorial layout"
```

---

### Task 2: Add 3D Tilt + Holographic Effects

This is already included in the Task 1 code above. After layout looks correct, verify the interactive effects:

**Step 1: Test 3D tilt**

- Hover over card — should tilt following cursor (max ±10°)
- Card scales up slightly (1.02) on hover
- Resting state has `-rotate-2`
- Mouse leave smoothly transitions back to resting state (0.4s ease-out)

**Step 2: Test holographic shimmer**

- On hover, iridescent rainbow gradient overlay appears
- Gradient angle shifts as cursor moves left/right
- `mix-blend-overlay` keeps it subtle
- At rest, shimmer has 0.3 opacity (faint)

**Step 3: Test light reflection**

- Radial white spotlight follows cursor position on card
- Disappears on mouse leave
- Doesn't interfere with clicking links or copy button

**Step 4: Test link interactions**

- All 4 links are clickable and open in new tab
- Email copy button works
- Hover states (blurple + underline) still work through the overlay layers

**Step 5: Commit if adjustments were needed**

```bash
git add src/components/Contact/ContactBox.tsx
git commit -m "fix: tune holographic card interactive effects"
```

---

### Task 3: Mobile / Responsive Fallback

**Files:**
- Modify: `src/components/Contact/ContactBox.tsx`

**Step 1: Add mobile shimmer animation**

On mobile (no cursor), replace mouse-driven effects with a subtle CSS animation. Add to the shimmer overlay:

- When `!desktopView`, use a CSS `@keyframes` animation that slowly sweeps the gradient angle
- Remove tilt transform on mobile (keep flat, keep the `-rotate-2`)
- The spotlight layer is hidden on mobile

**Step 2: Test responsive breakpoints**

- **Desktop (xl+)**: Full card with all 3 effects, card on right side of section
- **Tablet (md-lg)**: Card slightly smaller, tilt works
- **Mobile (<md)**: Card stacks below "Always up for...", no tilt, subtle CSS shimmer animation, all content readable

**Step 3: Run lint check**

Run: `bun run check && bun run knip`
Expected: PASS

**Step 4: Commit**

```bash
git add src/components/Contact/ContactBox.tsx
git commit -m "feat: add mobile shimmer fallback for holographic card"
```

---

### Task 4: Final Polish & Cleanup

**Step 1: Remove any dead dark mode code**

- Verify no `isDark` or `useTheme` references remain in ContactBox
- Run `bun run knip` to catch dead exports

**Step 2: Test full page flow**

- Scroll through entire site to contact section
- BlurFade entrance animation works
- SplitText animations on "Always up for..." work
- Signature animation draws on scroll into view
- Card effects perform smoothly (no jank)

**Step 3: Run final checks**

Run: `bun run check && bun run knip && bun run build`
Expected: All PASS

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: final polish for holographic business card"
```
