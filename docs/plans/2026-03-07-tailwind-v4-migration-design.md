# Tailwind v4 Migration — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate from Tailwind CSS v3.4.19 to v4 using the official upgrade tool, then manually fix anything it misses.

**Architecture:** Run `npx @tailwindcss/upgrade` to handle bulk changes (config→CSS, class renames, dependency swap), then manually verify CSS variables, animations, `@layer` blocks, and Biome compatibility.

**Tech Stack:** Tailwind CSS v4, `@tailwindcss/vite` plugin, Vite 6, Biome 2.4

---

### Task 1: Snapshot Pre-Migration State

**Why:** If the upgrade tool breaks things badly, we can `git checkout .` to restore.

**Step 1: Verify clean working tree**

Run: `git status`
Expected: `nothing to commit, working tree clean`

**Step 2: Commit (skip — already clean)**

No action needed. The design doc commit is our restore point.

---

### Task 2: Run the Official Upgrade Tool

**Files (will be modified by the tool):**
- Modify: `package.json` — swap `tailwindcss`/`postcss`/`autoprefixer` for `@tailwindcss/vite`
- Modify: `vite.config.js` — add `@tailwindcss/vite` plugin
- Modify: `src/styles.css` — `@import "tailwindcss/base"` etc. → `@import "tailwindcss"` + `@theme {}`
- Modify: all `.tsx` files — `bg-gradient-to-*` → `bg-linear-to-*`, shadow/blur/rounded scale shifts
- Delete: `tailwind.config.js`
- Delete: `postcss.config.js`

**Step 1: Run the upgrade tool**

Run: `npx @tailwindcss/upgrade`

The tool will prompt for confirmation. Accept defaults. It will:
1. Install `@tailwindcss/vite`, remove old deps
2. Migrate `tailwind.config.js` theme into `@theme {}` in `src/styles.css`
3. Rename gradient classes across all `.tsx` files
4. Apply shadow/blur/rounded scale shifts
5. Update `vite.config.js` with the new plugin
6. Delete `tailwind.config.js` and `postcss.config.js`

**Step 2: Install dependencies after tool runs**

Run: `bun install`

**Step 3: Review what the tool changed**

Run: `git diff --stat`

Verify these files were touched:
- `package.json`
- `vite.config.js`
- `src/styles.css`
- Multiple `.tsx` files
- `tailwind.config.js` (deleted)
- `postcss.config.js` (deleted)

**Step 4: Commit the automated migration**

```bash
git add -A
git commit -m "chore: run @tailwindcss/upgrade (v3 → v4)"
```

---

### Task 3: Verify and Fix `src/styles.css`

**Files:**
- Modify: `src/styles.css`

**Step 1: Read `src/styles.css` and verify the migration**

Check these specific things:

1. **Top-level import** should be `@import "tailwindcss"` (not the old three `@import "tailwindcss/base"` etc.)
2. **`@theme` block** should contain:
   - `--font-inter`, `--font-instrument`, `--font-jetbrainsmono` (from `fontFamily`)
   - `--color-blurple: #3643FC` and all 15 other color tokens referencing `var(--color-*)`
   - `--shadow-glowblurple` through `--shadow-glowcustomblacksmall` (5 shadows)
   - `--animate-shine` and `--animate-spinner-blade` (2 animations)
   - Keyframes for `shine` and `spinner-blade`
3. **`:root` and `.dark` CSS variable blocks** should be UNTOUCHED (they define the actual values)
4. **`@layer components` block** with `.spinner-blade` should still work (v4 supports `@layer`)
5. **`.shine-through`** class and its `@keyframes shine` should be untouched
6. **`.markdown-content`** styles should be untouched
7. **`@font-face` declarations** should be untouched

**Step 2: Fix any issues found**

Common issues the tool may get wrong:
- The tool might not understand that colors like `customblack: 'var(--color-card-bg)'` reference CSS vars. If it tries to inline them, restore the `var()` references.
- The `animation` config has `shine: 'shine var(--duration) infinite linear'` — verify `--animate-shine` preserves the `var(--duration)` reference.
- The tool may duplicate keyframes (once in `@theme`, once outside). Deduplicate if needed.

**Step 3: Commit fixes if any**

```bash
git add src/styles.css
git commit -m "fix: manual corrections to styles.css after v4 migration"
```

---

### Task 4: Verify and Fix `vite.config.js`

**Files:**
- Modify: `vite.config.js`

**Step 1: Read `vite.config.js` and verify**

Expected state after migration:
```js
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // ... rest unchanged
});
```

Check:
1. `@tailwindcss/vite` is imported and added to `plugins`
2. The `path` import and `resolve.alias` for `@/` is preserved
3. `optimizeDeps`, `build.rollupOptions`, `server` config unchanged

**Step 2: Fix if the tool removed/broke anything**

The `path` import and `resolve.alias` must be preserved — the `@/` alias is used throughout the codebase.

**Step 3: Commit fixes if any**

```bash
git add vite.config.js
git commit -m "fix: restore vite.config.js settings after v4 migration"
```

---

### Task 5: Verify Class Renames in Components

**Files:**
- Potentially modify: any `.tsx` file in `src/components/` and `src/blocks/`

**Step 1: Search for leftover v3 gradient classes**

Run: `grep -r "bg-gradient-to-" src/`
Expected: 0 results (all should be `bg-linear-to-*` now)

**Step 2: Search for shadow/blur/rounded scale shifts**

Check these v3→v4 renames happened:
- `shadow-sm` → `shadow-xs` (if present)
- `shadow` (bare) → `shadow-sm` (if present)
- `blur-sm` → `blur-xs` (4 uses of `blur-sm` in codebase)
- `rounded-sm` → `rounded-xs` (if present)
- `rounded` (bare) → `rounded-sm` (if present)

Run: `grep -rn "blur-sm\b" src/` — should be 0 (replaced with `blur-xs`)
Run: `grep -rn "shadow-sm\b" src/` — check if these are correct v4 (was bare `shadow` in v3)

**Step 3: Check for `decoration-clone` → `box-decoration-clone`**

Run: `grep -rn "decoration-clone" src/`
If found, it may need to become `box-decoration-clone` (check if the tool handled it).

**Step 4: Fix any missed renames**

Edit files as needed.

**Step 5: Commit fixes if any**

```bash
git add src/
git commit -m "fix: correct remaining class renames for Tailwind v4"
```

---

### Task 6: Verify Biome Compatibility

**Files:**
- Potentially modify: `biome.json`

**Step 1: Run Biome check**

Run: `bun run check`

If `useSortedClasses` errors on v4 class names (e.g., `bg-linear-to-*` not recognized), we need to check Biome's Tailwind v4 support.

**Step 2: Check Biome version supports TW v4**

Biome 2.4+ should support Tailwind v4 class sorting. If it doesn't:
- Option A: Update Biome to latest (`bun add -d @biomejs/biome@latest`)
- Option B: Temporarily downgrade `useSortedClasses` from `"error"` to `"warn"` in `biome.json`

**Step 3: Fix and commit if needed**

```bash
git add biome.json
git commit -m "fix: update Biome config for Tailwind v4 compatibility"
```

---

### Task 7: Verify `tailwind-merge` Compatibility

**Files:**
- Potentially modify: `package.json`

**Step 1: Check `tailwind-merge` version**

Current: `tailwind-merge: ^2.6.1`

`tailwind-merge` v2.x may not understand v4 class names (e.g., `bg-linear-to-*`). Check if the `cn()` utility in `src/lib/utils.ts` still works correctly.

Run: `bun run dev` and visually test a component that uses `cn()` with gradient classes.

**Step 2: Upgrade if needed**

If `tailwind-merge` doesn't handle v4 classes:
Run: `bun add tailwind-merge@latest`

**Step 3: Commit if upgraded**

```bash
git add package.json bun.lockb
git commit -m "chore: upgrade tailwind-merge for v4 compatibility"
```

---

### Task 8: Full Verification

**Step 1: TypeScript check**

Run: `bunx tsc --noEmit`
Expected: 0 errors

**Step 2: Biome lint + format**

Run: `bun run check`
Expected: passes clean

**Step 3: Dead code check**

Run: `bun run knip`
Expected: no new dead code introduced

**Step 4: Dev server**

Run: `bun run dev`
Expected: app starts, no console errors, all sections render correctly

**Step 5: Production build**

Run: `bun run build`
Expected: build succeeds, no warnings about missing classes

**Step 6: Final commit if any remaining fixes**

```bash
git add -A
git commit -m "fix: resolve remaining Tailwind v4 issues"
```

---

### Task 9: Clean Up

**Files:**
- Delete: `docs/plans/2026-03-07-tailwind-v4-migration-design.md` (optional — plan served its purpose)
- Modify: `CLAUDE.md` — update Tailwind version reference if present

**Step 1: Update CLAUDE.md**

Change any references to "Tailwind CSS 3" → "Tailwind CSS 4". Update the Conventions section if it mentions `tailwind.config.js` or `postcss.config.js`.

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for Tailwind v4"
```

---

## Known Risks

| Risk | Mitigation |
|------|------------|
| Upgrade tool doesn't understand CSS var references | Manual check in Task 3 |
| `tailwind-merge` v2 doesn't know v4 classes | Upgrade in Task 7 |
| Biome class sorting breaks | Update/downgrade rule in Task 6 |
| `@layer components` breaks in v4 | Manual verify in Task 3 |
| Upgrade tool misses some renames | grep checks in Task 5 |
