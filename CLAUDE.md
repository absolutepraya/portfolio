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
bun run verify       # Full blocking CI-equivalent quality suite
bun run react-doctor # Advisory full React Doctor scan
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
│   ├── About/            # Hero + profile card (legacy marquee components retained)
│   ├── Experience/       # Work timeline with Markdown and inline tech mentions
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
- Sections: About → Experience → Achievements → Projects. The project list
  includes original work and materially maintained open-source forks, but not
  generic services that are only self-hosted.
- Each section has paired IDs: `id="aboutsec"` (section) + `id="about"` (scroll anchor)
- ThemeContext provides light/dark mode toggle (localStorage + system preference fallback)
- Experience descriptions use explicit Markdown links for named products and platforms. The renderer gives only the first occurrence of each mapped technology in an experience an icon and link; languages remain ordinary text.

## Design System

- Light/dark theme support via CSS variables and `.dark` class on `<html>`
- Dark: bg `#03020F`, cards `#0d0d0d`–`#131313`; Light: bg `#f5f5f5`, cards `#e8e8e8`–`#f0f0f0`
- Accent: blurple `#3643FC` (active states, hovers, glows, gradients)
- Fonts (self-hosted variable): Inter (body), Instrument Serif (headings), JetBrains Mono (monospace), Maple Mono (footer/pills)
- Description copy in Experience, Achievements, and Projects, plus Victory Laps metadata, uses `text-sm` on mobile and `text-base` from `md`, with justified, relaxed body copy where appropriate.
- Project type filters use interactive `PopButton` controls, with the active filter black and inactive filters light. Project kind and tag labels use a compact raised treatment with a smaller radius, but remain static, non-interactive badges.
- The Project filter icon and label share the same subdued foreground color and stay on one line.
- Victory Laps organizer links use a compact `PopButton` treatment while remaining external anchors with their organizer logo.
- Footer uses Jakarta time on the left, the scroll-to-top call-to-action in the center, and Source code on the right. On mobile it stacks the call-to-action, Jakarta time, then Source code. Its compact, shorter mobile Victory Laps-style grid uses a slightly darker light-theme tint and fades in through the opaque `--color-footer-bg` overlay to become fully visible at the bottom.
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
- CI runs distinct blocking format, lint, typecheck, test, React Doctor (minimum score 99), build, and main-bundle budget checks. `knip` is advisory because its static analysis can need manual review.

## Agent Rules

- After every turn where files are edited, always run `bun run check` and `bun run knip` to ensure lint/format compliance and no dead code is introduced.

## Vanity Redirects

`redirects.json` at the repo root maps slugs to external URLs (e.g. `tracklist-buat-gina` → Spotify playlist) and is the single source of truth. `scripts/generate-redirects.js` reads it and writes two files:

- **`public/_redirects`** (generated, committed) — production. Cloudflare Workers Static Assets parses these temporary `302` rules before serving assets. It emits both `/slug` and `/slug/` forms.
- **`dist/serve.json`** (when `dist/` exists) — local-only, for previewing the production build via `bun run start` (`serve`/serve-handler). It emits the same two forms.

- Status: 302 (temporary, so destinations can change without browser cache lock-in).
- Add a new redirect: edit `redirects.json`, then `bun run build`. No code changes.
- ⚠️ Slugs must not collide with real static paths (e.g. `assets`) — redirects match before static files.
- ⚠️ Vite dev server does NOT honor either file; redirects work after `bun run build && bun run start` or on Cloudflare production.

## Deployment

**Cloudflare Workers Static Assets** — Worker `abhipraya-portfolio`. GitHub Actions builds and deploys production from `core`; trusted pull requests upload a preview Worker version. The Worker serves `dist/` with SPA fallback and has no application runtime code.

- **Verified production domains:** Cloudflare custom domains `abhipraya.dev` and `www.abhipraya.dev` only. `blog.abhipraya.dev` and all other zone records are out of scope.
- **Deployment contract:** `wrangler.jsonc`, `public/_headers`, `public/_redirects`, `.github/workflows/deploy-cloudflare.yml`, and `scripts/smoke-cloudflare-deployment.mjs` must remain aligned.
- **Local verification:** run `bun run build`, `bun run start`, then `bun run smoke:deployment -- https://example.workers.dev`. Validate the generated redirect rules and prerendered homepage before pushing.
- **CI release flow:** `Verify` runs the full `bun run verify` suite, validates the generated `dist/` files, and uploads that directory as the only deployable artifact. Same-repository pull requests deploy and smoke-test public `workers.dev` previews. A `core` push deploys the same artifact through the `absolutepraya-portfolio` GitHub environment, then smoke-tests `https://abhipraya.dev`. Closing a same-repository pull request deletes its preview Worker.
- **Branch protection:** `core` requires a pull request and the `Verify` check. No approval is mandatory; force pushes and branch deletion are blocked.
- **Fork safety:** fork pull requests receive verification only, never Cloudflare credentials.
- **Cache and security policy:** `public/_headers` revalidates HTML and mutable root files. All fingerprinted Vite files in `/assets/*` are immutable for one year. The policy also sets HSTS, `nosniff`, strict referrer handling, frame denial, and a restrictive permissions policy. Do not add CSP, Rocket Loader, Auto Minify, or broad zone-level cache settings without a separate compatibility audit.
- **Analytics:** Cloudflare Web Analytics is already enabled by automatic setup for the zone. Do not add a manual beacon or third-party analytics. Confirm live analytics with the browser network requests to `static.cloudflareinsights.com` and `/cdn-cgi/rum`.
- **Purge:** use a targeted Cloudflare cache purge for an exceptional stale root asset. Routine deploys use the Worker asset manifest and do not need a whole-cache purge.
- **Rollback:** remove the two Cloudflare custom-domain routes and restore only the observed Vercel apex A record and `www` CNAME. Do not change other DNS records.
- **CI credentials:** GitHub Actions uses its own scoped `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets. Never reuse, commit, or print local credentials.
- **DNSSEC:** DNSSEC for `abhipraya.dev` is pending the Registrar.eu transfer from Hostinger. Do not add a DS record at Hostinger, cancel the current Cloudflare DNSSEC setup, or enable multi-signer or multi-provider DNS. After the transfer completes, add Cloudflare's displayed DS record at Registrar.eu and verify the public DS record before declaring DNSSEC active.

### Legacy: Heroku (being retired)

Was Heroku (`git push heroku core:main`, `Procfile` → `bun run start`, `chrome-for-testing` buildpack for the prerender). GitHub Student credits expire **2026-07-31**; after that any usage is billed. The `heroku` git remote and `heroku-prebuild`/`heroku-postbuild` scripts remain for rollback during transition. **To decommission before 7/31:** delete the app (`heroku apps:destroy -a absolutepraya-portfolio`), then remove the card in the billing dashboard so nothing accrues.
