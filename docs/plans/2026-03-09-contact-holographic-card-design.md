# Contact Card Redesign: Premium Holographic Business Card

## Summary

Redesign the ContactBox as a premium holographic business card with 3D tilt, iridescent shimmer, and cursor-following light reflection. White/light card with silver/chrome metallic accents. Layout is asymmetric editorial (Approach C) with large name as visual anchor.

## Layout

Approach C — Asymmetric Editorial, 1.5:1 aspect ratio.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [PFP]  Software & AI Engineer                       │
│                                                      │
│  Daffa                                               │
│  Abhipraya           ✉  daffa@abhipraya.dev   [copy] │
│                      🔗  linkedin.com/in/...         │
│                      🐙  github.com/absolutepraya   │
│                      📝  blog.abhipraya.dev          │
│                                                      │
│                                ~ Abhipraya ~         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Left side: PFP + title at top, large stacked name below.
Right side: links vertically stacked, signature at bottom-right.

## Visual Styling

- **Card bg**: White/warm white (`#fafaf9`)
- **Card border**: 1px metallic silver gradient (pseudo-element technique)
- **Card shadow**: Soft layered box-shadow, intensifies on hover
- **Rotation**: `-rotate-2` at rest, clears on hover for tilt interaction
- **Pin**: Kept, top-right corner
- **Aspect ratio**: 1.5:1 (responsive, max-width capped)

## Typography

| Element | Font | Details |
|---------|------|---------|
| Name | Instrument Serif | ~3rem, chrome/silver gradient text, stacked two lines |
| Title | Inter | Small, muted `#6b6b78`, tracking-wide |
| Links | JetBrains Mono | Small, `#1a1a2e`, hover → blurple `#3643FC` + underline |
| Signature | Signature component | Bottom-right |

## Chrome/Metallic Effects

- **Name gradient**: `linear-gradient(135deg, #c0c0c0, #e8e8e8, #a0a0a0, #d4d4d4)` — silver
- **Card border**: Metallic gradient via pseudo-element or border-image
- **Separator**: Thin line with same metallic gradient
- **PFP**: Chrome ring border (2px metallic gradient ring)

## Interactive Effects (3 Layers)

### Layer 1 — 3D Tilt

- `onMouseMove` calculates cursor position relative to card center
- `transform: perspective(800px) rotateX(Ydeg) rotateY(Xdeg)` — max ±10°
- Smooth transition on mouse leave to reset flat
- Resting `-rotate-2` clears on hover to let tilt take over
- Pure CSS transforms + JS mouse tracking

### Layer 2 — Holographic Shimmer

- Overlay div/pseudo-element covering the card, `pointer-events: none`
- Rainbow/iridescent gradient: `linear-gradient(var(--angle), transparent, rgba(255,255,255,0.1), rgba(200,220,255,0.15), rgba(255,200,255,0.1), transparent)`
- `background-position` shifts based on cursor position
- `mix-blend-mode: overlay` for natural blending
- Low opacity — subtle, not overwhelming

### Layer 3 — Light Reflection (Spotlight)

- Radial gradient div following cursor: `radial-gradient(circle at cursor, rgba(255,255,255,0.25), transparent 60%)`
- `pointer-events: none`, above card content
- Creates "shiny surface catching light" effect

## Responsive Behavior

- **Desktop (xl+)**: Full 1.5:1 card, all 3 effects active, right side of section
- **Tablet (md)**: Same card slightly smaller, tilt still works
- **Mobile**: Card stacks below "Always up for...", no tilt (no cursor), metallic gradients + subtle CSS shimmer animation instead

## Tech Stack

Pure CSS + JS (React state for mouse tracking). No WebGL/Three.js/canvas.

- 3D tilt: `perspective()` + `rotateX/Y` transforms via `onMouseMove`
- Shimmer: CSS gradient with dynamic `background-position`
- Light: Radial gradient div with dynamic positioning
- All wrapped in `requestAnimationFrame` or throttled for perf

## Content (Same as Current)

- PFP (grayscale → color on hover, chrome ring)
- Name: "Daffa Abhipraya"
- Title: "Software & AI Engineer" (changed from "Fullstack Developer")
- Links: email (copyable), LinkedIn, GitHub, blog
- Pin decoration (top-right)
- Signature component (bottom-right)

## Files to Modify

- `src/components/Contact/ContactBox.tsx` — full rewrite of card layout, styling, and interactive effects

## What's Removed

- Dark mode card variant (no longer needed)
- `useTheme` import and `isDark` usage in ContactBox
