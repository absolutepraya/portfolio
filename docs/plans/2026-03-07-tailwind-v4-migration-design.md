# Tailwind v4 Migration Design

## Context

Portfolio (abhipraya.dev) uses Tailwind CSS v3.4.19 with PostCSS + autoprefixer. Migrating to v4 to enable shadcn v4 components and adopt the new CSS-based config system.

Branch: `feat/tailwind-v4` (from `feat/light-mode`)

## Current State

- `tailwind.config.js` (ESM): 3 font families, 16 colors (all CSS var refs), 5 box shadows, 2 animations + keyframes
- `postcss.config.js`: tailwindcss + autoprefixer
- `src/styles.css`: `@import "tailwindcss/*"` directives, CSS variables in `:root`/`.dark`, `@layer components` blocks, @font-face declarations
- 29 `bg-gradient-to-*` usages across components (must become `bg-linear-to-*`)
- No `@apply`, no ring utilities, no deprecated patterns

## Strategy: Automated Upgrade + Manual Fixes

### Step 1: Run `npx @tailwindcss/upgrade`

The official tool will:
- Install `@tailwindcss/vite`, remove `tailwindcss`, `postcss`, `autoprefixer`
- Update `vite.config.js` to use the Vite plugin
- Convert `@tailwind` directives to `@import "tailwindcss"`
- Migrate `tailwind.config.js` theme into `@theme {}` in CSS
- Rename `bg-gradient-to-*` to `bg-linear-to-*` (29 occurrences)
- Apply shadow/blur/rounded scale shifts
- Delete `tailwind.config.js` and `postcss.config.js`

### Step 2: Manual Fixes

- Verify CSS variable references (`var(--color-*)`) survived in `@theme`
- Verify custom animations/keyframes migrated correctly
- Check `@layer components` blocks (`.shine-through`, `.spinner-blade`, `.markdown-content`)
- Fix any class renames the tool missed

### Step 3: Biome Config

- Run `bun run check` and verify `useSortedClasses` works with v4 class names
- Update Biome config if sorting breaks

### Step 4: Verify

- `bunx tsc --noEmit` — no type errors
- `bun run check` — Biome passes
- `bun run knip` — no dead code
- `bun run dev` — app runs correctly
- `bun run build` — production build succeeds

## Design Decisions

- **Keep CSS variable theme system**: Colors stay as `var(--color-*)` in `:root`/`.dark`. No refactor to v4-native dark mode — current system works well and supports the light mode feature.
- **Use `@tailwindcss/vite` plugin**: Recommended for Vite projects, better perf than PostCSS.
- **Automated tool first**: Handles bulk of mechanical changes, reduces manual error.

## Not in Scope

- Dark mode refactor (keeping CSS var system)
- shadcn installation (separate task after v4 lands)
- Config files stay JS (vite.config.js)
