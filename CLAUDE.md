# Portfolio — abhipraya.dev

**Always keep this file up to date whenever anything changes in the codebase.**

## Tech Stack

React 18 + Vite 6 + Tailwind CSS 3 + Framer Motion + Bun

Other key deps: @react-spring/web (SplitText/CountUp animations), @mui/joy (Tabs in Projects), @tabler/icons-react, react-fast-marquee, react-markdown, moment-timezone, clsx + tailwind-merge (`cn()` utility)

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Dev server (Vite)
bun run build        # Production build
bun run check        # Lint + format (Biome)
bun run start        # Serve production build (serve -s dist)
bun run knip         # Dead code detection
```

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root layout
├── styles.css            # Global CSS (@font-face, Tailwind, animations)
├── components/           # Page sections
│   ├── NavBar/           # Floating nav with IntersectionObserver
│   ├── About/            # Hero + skills/stacks marquees
│   ├── Experience/       # Work timeline with markdown descriptions
│   ├── Achievements/     # Hackathon wins with image galleries
│   ├── Projects/         # Project cards with tab filtering (MUI Joy)
│   ├── Contact/          # Contact info + social links
│   └── Footer.jsx        # Copyright + Jakarta clock
├── blocks/               # Reusable animation components
│   └── Animations/       # BlurFade, FlickeringGrid, HoverBorderGradient, IosSpinner
│   └── TextAnimations/   # SplitText, CountUp (from reactbits.dev)
├── data/                 # Static data (experiences, projects, achievements, stacks)
├── lib/                  # Hooks (DesktopView, TabletView) and utils (cn)
└── assets/               # Images, fonts, org logos, project previews
```

## Architecture

- Single-page app with anchor-based scroll navigation (no React Router)
- NavBar uses IntersectionObserver to highlight active section
- Sections: About → Experience → Achievements → Projects → Contact
- Each section has paired IDs: `id="aboutsec"` (section) + `id="about"` (scroll anchor)

## Design System

- Dark theme only (bg: `#03020F`, cards: `#0d0d0d`–`#131313`)
- Accent: blurple `#3643FC` (active states, hovers, glows, gradients)
- Text: `#cccccc` base, gradients to `#5c5c5a` for section titles
- Fonts (self-hosted variable): Inter (body), Instrument Serif (headings), JetBrains Mono (monospace), Maple Mono (footer/pills)
- Glow effects via custom Tailwind `boxShadow` tokens (`shadow-glowblurple*`)

## Conventions

- JSX only (no TypeScript) — jsconfig.json for IDE/Vite module resolution
- Biome is the sole linter + formatter (with Tailwind class sorting enabled via `useSortedClasses`)
- Husky pre-commit hook runs `bun run check`
- Single quotes, 2-space indent
- Tailwind utility classes + custom responsive hooks (`DesktopView.js` >= 1024px, `TabletView.js` >= 768px)

## Agent Rules

- After every turn where files are edited, always run `bun run check` and `bun run knip` to ensure lint/format compliance and no dead code is introduced.

## Deployment

Heroku via `Procfile` (`web: bun run start`). Site live at abhipraya.dev. OG images hosted on Cloudinary.
