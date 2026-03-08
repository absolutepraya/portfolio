# Contact Business Card Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restyle ContactBox as a minimalist premium business card — always white/cream, clean typography, curated contact info.

**Architecture:** Single component rewrite of `ContactBox.tsx`. Card is always light-colored regardless of theme. Reuses existing PFP asset, Signature component, pin image, and copy-to-clipboard logic.

**Tech Stack:** React, Tailwind CSS, @tabler/icons-react, existing Signature + BlurFade components

---

### Task 1: Rewrite ContactBox component

**Files:**
- Modify: `src/components/Contact/ContactBox.tsx`

**Step 1: Rewrite ContactBox.tsx**

Replace the entire card content with the business card layout:

```tsx
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconNotebook,
} from '@tabler/icons-react';
import { useState } from 'react';
import PFP from '../../assets/creds/pfp.webp';
import Pin from '../../assets/creds/pin.webp';
import BlurFade from '../../blocks/Animations/BlurFade';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { Signature } from '../signature';

const ContactBox = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('daffa@abhipraya.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      className='flex w-full flex-col items-center justify-center p-6 xl:w-1/2'
      delay={desktopView ? 0.8 : 0.3}
      inView
      offset={30}
    >
      <div className='relative flex w-full max-w-120 -rotate-2 flex-col space-y-5 rounded-2xl border border-[#e5e5e5] bg-[#fafaf9] p-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:-rotate-3 md:p-8'>
        {/* Pin decoration */}
        <img
          src={Pin}
          alt='Pin'
          className='absolute -top-12 -right-10 w-16 scale-[85%] drop-shadow-md md:scale-90'
          draggable='false'
        />

        {/* Header: PFP + Name + Title */}
        <div className='flex items-center space-x-4'>
          <img
            src={PFP}
            alt='Profile'
            className='h-12 w-12 shrink-0 rounded-full object-cover grayscale transition duration-200 hover:grayscale-0'
            draggable='false'
          />
          <div>
            <h3 className='font-instrument text-2xl text-[#1a1a2e]'>
              Daffa Abhipraya
            </h3>
            <p className='text-sm text-[#6b6b78]'>Fullstack Developer</p>
          </div>
        </div>

        {/* Separator */}
        <div className='h-px w-full bg-[#e5e5e5]' />

        {/* Links */}
        <div className='flex flex-col space-y-2.5'>
          {links.map((link) => (
            <div key={link.text} className='flex items-center space-x-2'>
              <link.icon size={16} stroke={1.8} className='shrink-0 text-[#6b6b78]' />
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='font-jetbrainsmono text-xs text-[#1a1a2e] underline-offset-3 transition-colors hover:text-[#3643FC] hover:underline md:text-sm'
              >
                {link.text}
              </a>
              {link.copyable && tabletView && (
                <button
                  type='button'
                  className='ml-1 rounded-md p-1 text-[#6b6b78] transition-colors hover:cursor-pointer hover:bg-[#e5e5e5] hover:text-[#1a1a2e]'
                  onClick={handleCopy}
                  title='Copy email'
                >
                  {copied ? <IconCheck size={14} stroke={2} /> : <IconCopy size={14} stroke={2} />}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Signature */}
        <Signature
          text='Abhipraya'
          fontSize={36}
          color='#1a1a2e'
          duration={1.5}
          className='mt-1 h-10 self-end'
          inView
        />
      </div>
    </BlurFade>
  );
};

export default ContactBox;
```

Key decisions:
- Card bg always `#fafaf9` (warm white), text always `#1a1a2e` — ignores theme
- PFP is 48px circle with grayscale→color on hover
- Links use tabler icons + JetBrains Mono, hover turns blurple (`#3643FC`)
- Signature color hardcoded to `#1a1a2e` (dark) since card is always light
- Copy button only shows on tablet+ (same pattern as current)
- Removed: hello.webp, casual message, LinkedIn CTA, Instagram, Spotify, SplitText import, useTheme import

**Step 2: Run lint + dead code check**

Run: `bun run check && bun run knip`

Check for any new unused imports (SplitText, useTheme, hello.webp should no longer be imported). Fix if needed.

**Step 3: Visual verification**

Check on both mobile and desktop via vps.abhipraya.dev. Verify:
- Card is always white/cream regardless of dark/light mode
- PFP circle renders correctly
- All 4 links work and open in new tab
- Copy button works for email
- Pin decoration positioned correctly
- Signature animates on scroll
- Hover scale + shadow works
- Card rotation looks natural

**Step 4: Commit**

```bash
git add src/components/Contact/ContactBox.tsx
git commit -m "feat: redesign contact card as minimalist business card"
```
