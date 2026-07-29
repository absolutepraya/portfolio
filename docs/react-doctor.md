# React Doctor baseline

React Doctor is pinned at `0.8.3`. It is advisory during local development, while the CI command blocks warnings and enforces a combined score of at least 99.

## Commands

```bash
bun run react-doctor          # full local scan, writes an ignored local report
bun run react-doctor:staged   # advisory scan of staged files for pre-commit use
bun run react-doctor:ci       # warning gate plus the 99-point score requirement
```

## Initial baseline and disposition

The full scan against the pre-remediation `core` source recorded 60 diagnostics and a score of 39. All application-owned findings were actionable and resolved. There are no accepted findings or React Doctor exclusions.

| Category | Rule | Severity | Affected files | Disposition |
| --- | --- | --- | --- | --- |
| Accessibility | `require-reduced-motion` | error | `package.json` | resolved |
| Bugs | `effect-needs-cleanup`, `no-prop-callback-in-effect` | warning/error | `CountUp.tsx`, `AchievementsBox.tsx` | resolved |
| Bugs | `exhaustive-deps`, `no-tailwind-layout-transition` | warning | `ExperienceBox.tsx` | resolved |
| Bugs | `no-set-state-after-await-in-effect`, `no-effect-with-fresh-deps`, `no-adjust-state-on-prop-change` | warning/error | `signature.tsx`, `slide-up-text.tsx` | resolved |
| Bugs | `no-side-effect-in-state-updater-function`, `no-impure-state-updater` | warning/error | `ThemeContext.tsx` | resolved |
| Performance | `use-lazy-motion` | warning | animation blocks plus achievements, experience, projects, shared text, and signature components | resolved |
| Performance | `no-transition-all`, `no-long-transition-duration` | warning | stack/tool sliders, achievements, navigation, experience, and projects components | resolved |
| Performance | `rerender-state-only-in-handlers`, `js-combine-iterations` | warning | `AchievementsBox.tsx`, `ExperienceBox.tsx` | resolved |
| Performance | `js-hoist-intl`, `jsx-no-constructed-context-values` | warning | `slide-up-text.tsx`, `ThemeContext.tsx` | resolved |
| Maintainability | `unused-dependency` | warning | `package.json` | resolved |
| Maintainability | `prefer-module-scope-static-value` | warning | `IosSpinner.tsx`, `ProfileCard.tsx`, `Projects.tsx`, `pop-button.tsx`, `signature.tsx` | resolved |
| Maintainability | `only-export-components` | warning | `SliderStacks.tsx`, `SliderTools.tsx` | resolved |
| Maintainability | `no-giant-component`, `no-array-index-as-key` | warning | `AchievementsBox.tsx`, `Projects.tsx` | resolved |
| Maintainability | `no-polymorphic-children`, `prefer-module-scope-pure-function` | warning | `rich-button.tsx`, `slide-up-text.tsx` | resolved |

The final full scan reports score 100 with zero diagnostics.
