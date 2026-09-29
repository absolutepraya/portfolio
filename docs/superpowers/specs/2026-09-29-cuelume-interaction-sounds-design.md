# Cuelume Interaction Sounds Design

## Goal

Add restrained sound feedback to the portfolio's existing controls using Cuelume. Cuelume is an implementation dependency, not a portfolio project.

## Scope

- Play a cue when a visitor clicks an anchor or button. Do not play sounds on hover.
- Use `page` for navbar links, `toggle` for show-more and collapse/expand controls, and `tick` for every other anchor and button.
- Give the email copy button the ordinary `tick` click cue. Keep its copied state tied to clipboard success.
- Keep all visual interactions and navigation functional if audio is unavailable or blocked.

## Visitor behavior

- The page is silent on load. Sound plays only in response to a visitor interaction, with no sound toggle or saved sound preference.
- Navbar links play `page` on click. Show-more and collapse/expand controls play `toggle` on click. All other anchors and buttons, including inline Markdown links, technology mentions, filters, carousel controls, and email copy, play `tick` on click.
- No anchor or button plays a sound on hover. The page also stays silent on load.
- The email copy button plays `tick` on click. Its copied state changes only after the clipboard promise resolves; a failed copy does not show a copied state.
- Sound remains secondary to the existing visual feedback. No sound control or volume UI is added.

## Integration design

Add `cuelume` as a runtime dependency using Bun. Call `bind()` once from `src/main.tsx` so Cuelume delegates events across the document, including controls rendered by React after startup. The API is idempotent, so the application does not need to re-bind after rendering.

Use `data-cuelume-toggle` on anchors and native button elements for click cues. Set the sound name by control type: `page` for navbar links, `toggle` for disclosure controls, and `tick` for every other link or button. This uses native click activation, including keyboard activation. Do not add hover attributes anywhere.

Mark every rendered anchor with a click cue, including markdown-rendered and technology-name links. Mark the email copy button with the ordinary `tick` cue, and update the copied state only after `navigator.clipboard.writeText` resolves. Do not call `play()` imperatively for email copy.

No route, audio preference store, global sound state, or custom audio engine is needed. If browser policy prevents playback, the interaction continues normally and no audio error is shown.

## Files in scope

- `package.json` and `bun.lock` for the dependency.
- `src/main.tsx` for the one-time `bind()` call.
- Shared button primitives and their native button call sites for click attributes and sound variants.
- Navigation, profile/contact, project, organization/achievement, footer, and markdown-rendered anchor call sites for click attributes.
- The profile card copy button for the `tick` cue and promise-aware copied state.
- `CLAUDE.md` to keep the project architecture and interaction contract current.

## Validation

- Confirm the page produces no sound on load.
- Confirm each button and anchor produces exactly one cue on click: navbar links use `page`, disclosure controls use `toggle`, and all others use `tick`.
- Confirm no anchor or button plays a cue on hover, including inline prose and technology links.
- Confirm keyboard activation produces the same click cue and touch interaction produces no hover cue.
- Confirm email copy plays `tick` on click and only shows the copied state after the clipboard promise resolves.
- Run `bun run check` and `bun run knip`, as required by the repository instructions.

## Non-goals

- Adding Cuelume to Selected Works or describing it as Abhip's project.
- Adding a sound toggle, volume slider, or persisted audio preference.
- Adding sound on hover.
- Replacing, delaying, or coupling visual feedback to audio playback.
