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

## Vanity Redirects

`redirects.json` at the repo root maps slugs to external URLs (e.g. `tracklist-buat-gina` → Spotify playlist) and is the single source of truth. `scripts/generate-redirects.js` reads it and writes two files:

- **`vercel.json`** (repo root, committed) — production. Vercel serves the `redirects` array (each `statusCode: 302`). The generator MERGES into the existing `vercel.json`, only managing the `redirects` key, and preserves the `services` + catch-all `rewrites` blocks that `vercel link` writes. Vercel evaluates redirects before rewrites, so vanity slugs win over the SPA catch-all.
- **`dist/serve.json`** (when `dist/` exists) — local-only, for previewing the prod build via `bun run start` (`serve`/serve-handler). Emits both `/slug` and `/slug/` forms.

- Status: 302 (temporary, so destinations can change without browser cache lock-in).
- Add a new redirect: edit `redirects.json`, then `bun run deploy` (regenerates `vercel.json`). No code changes.
- ⚠️ Slugs must not collide with real static paths (e.g. `assets`) — redirects match before static files.
- ⚠️ Vite dev server does NOT honor either file; redirects only work after `bun run build && bun run start` (or in production on Vercel).

## Deployment

**Vercel** — project `abhipraya-portfolio`, team `daffa-abhipraya-putras-projects`. Live at abhipraya.dev + www.abhipraya.dev. OG preview image is `public/preview.webp` (served from the site, not Cloudinary).

**Why prebuilt CLI deploys (not git-push auto-deploy):** the build runs a Puppeteer prerender (`scripts/prerender.js`) that needs headless Chrome, which is fragile in Vercel's cloud build. So we build locally (Chrome works on the Mac) and upload the prebuilt output.

```bash
bun run deploy   # generate-redirects → vercel build --prod → vercel deploy --prebuilt --prod
```

- **First-time setup per machine:** `vercel login`, then `vercel pull --yes --environment production` (creates `.vercel/`, which is gitignored). Requires the `vercel` CLI on PATH (installed globally).
- **DNS:** abhipraya.dev + www are on Cloudflare as **dns-only** (grey cloud) → Vercel `76.76.21.21` (apex A) / CNAME www → apex. Same pattern as `blog.abhipraya.dev`. Vercel auto-issues + renews the Let's Encrypt cert (CAA already allows `letsencrypt.org`). If a cert stalls after a DNS change, force it: `vercel certs issue abhipraya.dev www.abhipraya.dev`.
- **Rollback:** deployments are immutable; `vercel rollback` or promote a previous deployment in the dashboard.
- `vercel.json` is committed; `.vercel/` is gitignored.

### Legacy: Heroku (being retired)

Was Heroku (`git push heroku core:main`, `Procfile` → `bun run start`, `chrome-for-testing` buildpack for the prerender). GitHub Student credits expire **2026-07-31**; after that any usage is billed. The `heroku` git remote and `heroku-prebuild`/`heroku-postbuild` scripts remain for rollback during transition. **To decommission before 7/31:** delete the app (`heroku apps:destroy -a absolutepraya-portfolio`), then remove the card in the billing dashboard so nothing accrues.
