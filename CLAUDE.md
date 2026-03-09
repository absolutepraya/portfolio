# Portfolio — abhipraya.dev

**Always keep this file up to date whenever anything changes in the codebase.**

## Tech Stack

React 18 + Vite 6 + Tailwind CSS 4 + Framer Motion + Bun + TypeScript

Other key deps: @react-spring/web (CountUp animations), @tabler/icons-react, react-markdown, moment-timezone, clsx + tailwind-merge (`cn()` utility), class-variance-authority + @radix-ui/react-slot (component variants), opentype.js (signature SVG rendering), shadcn (UI component scaffolding)

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
├── main.tsx              # Entry point
├── App.tsx               # Root layout
├── styles.css            # Global CSS (@theme, @font-face, CSS variables, animations)
├── vite-env.d.ts         # Asset module declarations (.webp, .png, .svg, .mp4)
├── components/           # Page sections
│   ├── NavBar/           # Floating nav with IntersectionObserver + signature
│   ├── About/            # Hero + profile card + skills/stacks marquees
│   ├── Experience/       # Work timeline with markdown descriptions
│   ├── Achievements/     # Hackathon wins with image galleries
│   ├── Projects/         # Project cards with badge filtering
│   ├── Footer/           # Copyright + Jakarta clock + shimmer pill
│   ├── badge.tsx         # Badge component (CVA variants)
│   ├── marquee.tsx       # Custom marquee with fade edges
│   ├── pop-button.tsx    # Animated pop button
│   ├── rich-button.tsx   # Rich button with shadow/color variants
│   ├── shimmer-text.tsx  # Animated shimmer text effect
│   ├── signature.tsx     # SVG signature via opentype.js
│   └── slide-up-text.tsx # Word/char slide-up animation
├── blocks/               # Reusable animation components
│   └── Animations/       # BlurFade, FlickeringGrid, HoverBorderGradient, IosSpinner
│   └── TextAnimations/   # CountUp (from reactbits.dev)
├── data/                 # Static data (experiences, projects, achievements, stacks)
├── lib/                  # Hooks (DesktopView, TabletView), ThemeContext, utils (cn)
└── assets/               # Images, fonts, org logos, project previews
```

## Architecture

- Single-page app with anchor-based scroll navigation (no React Router)
- NavBar uses IntersectionObserver to highlight active section
- Sections: About → Experience → Achievements → Projects
- Each section has paired IDs: `id="aboutsec"` (section) + `id="about"` (scroll anchor)
- ThemeContext provides light/dark mode toggle (localStorage + system preference fallback)

## Design System

- Light/dark theme support via CSS variables and `.dark` class on `<html>`
- Dark: bg `#03020F`, cards `#0d0d0d`–`#131313`; Light: bg `#f5f5f5`, cards `#e8e8e8`–`#f0f0f0`
- Accent: blurple `#3643FC` (active states, hovers, glows, gradients)
- Fonts (self-hosted variable): Inter (body), Instrument Serif (headings), JetBrains Mono (monospace), Maple Mono (footer/pills)
- Glow effects via custom `--shadow-*` tokens in `@theme` (`shadow-glowblurple*`)
- Profile card: metallic 3D tilt (perspective + rotateX/Y), holographic shimmer, touch support, idle wobble hint animation

## Conventions

- TypeScript strict mode — tsconfig.json with `@/*` path alias
- Tailwind v4 CSS-based config (`@theme` in styles.css, no tailwind.config.js)
- `@tailwindcss/vite` plugin (no PostCSS config needed)
- Biome is the sole linter + formatter (with Tailwind class sorting via `useSortedClasses` + `tailwindDirectives` CSS parsing)
- Husky pre-commit hook runs `bun run check`
- Single quotes, 2-space indent
- Tailwind utility classes + custom responsive hooks (`DesktopView.ts` >= 1024px, `TabletView.ts` >= 768px)

## Agent Rules

- After every turn where files are edited, always run `bun run check` and `bun run knip` to ensure lint/format compliance and no dead code is introduced.

## Deployment

Heroku via `Procfile` (`web: bun run start`). Site live at abhipraya.dev. OG images hosted on Cloudinary.

- **App name:** `absolutepraya-portfolio`
- **Stack:** heroku-24 (Cedar generation)
- **Buildpacks:** chrome-for-testing, heroku-buildpack-bun, heroku/nodejs
- **Git remotes:** `origin` (GitHub), `heroku` (Heroku git)
- **Deploy:** `git push heroku core:main` (pushes core branch to Heroku main)

### Heroku CLI commands

```bash
# Deployment & releases
heroku releases -a absolutepraya-portfolio          # List recent releases
heroku releases:info -a absolutepraya-portfolio      # Latest release details
heroku releases:rollback -a absolutepraya-portfolio  # Rollback to previous release
heroku releases:rollback v201 -a absolutepraya-portfolio  # Rollback to specific version

# Logs & monitoring
heroku logs -a absolutepraya-portfolio -n 100        # Last 100 log lines
heroku logs -a absolutepraya-portfolio --tail         # Stream logs in real-time
heroku logs -a absolutepraya-portfolio -s app         # App logs only (not Heroku router)

# Dyno management
heroku ps -a absolutepraya-portfolio                  # Check dyno status
heroku ps:restart -a absolutepraya-portfolio           # Restart all dynos

# Config & info
heroku config -a absolutepraya-portfolio              # View config/env vars
heroku buildpacks -a absolutepraya-portfolio           # List buildpacks
```
