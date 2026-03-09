# Contact Business Card Redesign

## Summary

Restyle the right-side ContactBox as a minimalist premium business card — always white/cream regardless of theme, with clean typography and a curated set of contact info.

## Layout

Left side of contact section stays as-is ("Always up for..." with staggered list). Right side becomes the business card.

```
┌──────────────────────────────────────────────┐
│                                              │
│  [PFP]  Daffa Abhipraya                      │
│         Fullstack Developer                  │
│                                              │
│  ──────────────────────────────              │
│                                              │
│  ✉  daffa@abhipraya.dev              [copy]  │
│  🔗  linkedin.com/in/daffaabhipraya          │
│  🐙  github.com/absolutepraya               │
│  📝  blog.abhipraya.dev                      │
│                                              │
│                           ~ Abhipraya ~      │
│                                              │
└──────────────────────────────────────────────┘
```

## Visual Details

- **Background**: Always white/cream (`#fafaf9` or similar warm white), dark text (`#1a1a2e`)
- **Border**: Subtle `#e5e5e5`, light box shadow for depth
- **Rotation**: Slight `-rotate-2` or `-rotate-3` for organic feel
- **Pin**: Keep pin image on top-right corner
- **Hover**: Subtle scale up + shadow increase (like picking the card up)
- **Aspect ratio**: Roughly matches a real business card proportions

## Content

### Top section
- PFP: Small circle (40-48px), grayscale with hover color (reuse existing behavior)
- Name: "Daffa Abhipraya" — Instrument Serif, large, dark
- Title: "Fullstack Developer" — Inter, smaller, muted gray

### Separator
- Thin horizontal line

### Links section (all left-aligned, tabler icons + JetBrains Mono URLs)
- Email: `daffa@abhipraya.dev` with copy button
- LinkedIn: `linkedin.com/in/daffaabhipraya`
- GitHub: `github.com/absolutepraya`
- Blog: `blog.abhipraya.dev`

### Signature
- Existing Signature component, bottom-right aligned

## What's removed from current design
- Casual message ("Feel free to reach out...")
- "or hit me up on LinkedIn" CTA button
- "Find me on other platforms" text
- Instagram and Spotify links
- Hello emoji image

## What stays
- Email with copy button
- Pin decoration
- Signature component
- Slight card rotation

## Files to modify
- `src/components/Contact/ContactBox.tsx` — full rewrite of card content and styling
