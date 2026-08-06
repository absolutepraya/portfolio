# Profile Card Dither Fade Design

## Goal

Keep the profile card's existing 112px Dither region and reveal it with a vertical fade: transparent at its top edge and fully visible at its bottom edge.

## Scope

- Apply the fade only to the Dither layer in `ProfileCard`.
- Preserve the card's metallic background, hover reflection, layout, height, Dither animation, and Dither mouse interaction.
- Do not alter the footer's existing FlickeringGrid treatment.

## Design

The Dither wrapper receives a CSS alpha mask. The mask is transparent at the top and opaque at the bottom, so it clips the Dither canvas rather than painting a color over the card.

This exposes the already-rendered card background and shimmer through the top of the region. The Dither animation reaches its configured opacity at the bottom edge.

Use both the standard `mask-image` property and `-webkit-mask-image` for browser compatibility. Both masks use the same top-to-bottom linear gradient:

```css
linear-gradient(to bottom, transparent 0%, black 100%)
```

The 112px region remains `h-28`. Its current `opacity-55`, `mix-blend-screen`, and Dither properties remain unchanged.

## Validation

- At desktop width, inspect the card's Dither strip: its upper edge blends into the native card gradient and its lower edge shows the animated Dither at full configured strength.
- Verify the card's hover tilt and Dither interaction still work.
- Run `bun run check`, `bun run typecheck`, `bun run knip`, and `bun run build`.
