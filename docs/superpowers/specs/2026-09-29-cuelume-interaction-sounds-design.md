# Cuelume Interaction Sounds Design

## Goal

Add restrained sound feedback to the portfolio's existing controls using Cuelume. Cuelume is an implementation dependency, not a portfolio project.

## Scope

- Play a cue when a visitor activates a button, including the Selected Works type filters.
- Play a hover cue on prominent anchor links.
- Play a distinct success cue only after the email address is copied successfully.
- Keep inline links in prose quiet.
- Keep all visual interactions and navigation functional if audio is unavailable or blocked.

## Visitor behavior

- The page is silent on load. Sound plays only in response to a visitor interaction, with no sound toggle or saved sound preference.
- Actual buttons play one click cue. Filters and other ordinary actions use `tick`; expand and collapse controls use `toggle`.
- The email copy button uses only the success cue, after the clipboard promise resolves. It does not also play the generic button cue. If copying fails, it does not show a copied state or play success.
- Anchors play `tick` on hover only. They do not play a click cue. Hover cues apply to prominent navigation, profile/contact, project action, organization/achievement action, and footer source links. Inline Markdown links and technology mentions remain silent.
- Buttons do not play on hover. Cuelume's hover handling is limited to fine pointers, so touch devices do not receive hover cues.
- Sound remains secondary to the existing visual feedback. No sound control or volume UI is added.

## Integration design

Add `cuelume` as a runtime dependency using Bun. Call `bind()` once from `src/main.tsx` so Cuelume delegates events across the document, including controls rendered by React after startup. The API is idempotent, so the application does not need to re-bind after rendering.

Use `data-cuelume-toggle` on native button elements for click cues. Set the sound name by control type: `tick` for ordinary actions and filters, and `toggle` for disclosure controls. This uses native click activation, including keyboard activation. Do not add hover attributes to buttons.

Use `data-cuelume-hover="tick"` only on the prominent anchor links listed above. Do not mark up all anchors globally. In particular, markdown-rendered and technology-name links in descriptive copy stay untagged to avoid repeated sounds while reading.

Import `play` in the email copy component and call `play('success')` only after `navigator.clipboard.writeText` resolves. Update the copied state after success; on rejection, leave it unset and do not play a success cue. This makes the audible and visual confirmation reflect the actual clipboard result.

No route, audio preference store, global sound state, or custom audio engine is needed. If browser policy prevents playback, the interaction continues normally and no audio error is shown.

## Files in scope

- `package.json` and `bun.lock` for the dependency.
- `src/main.tsx` for the one-time `bind()` call.
- Shared button primitives and their native button call sites for click attributes and sound variants.
- Navigation, profile/contact, project, organization/achievement, and footer anchor call sites for hover attributes.
- The profile card copy handler for the success cue and promise-aware copied state.
- `CLAUDE.md` to keep the project architecture and interaction contract current.

## Validation

- Confirm the page produces no sound on load.
- Confirm each button produces exactly one cue: ordinary buttons and Selected Works filters use `tick`, disclosure controls use `toggle`, and email copy uses success only after the clipboard promise resolves.
- Confirm prominent anchors produce a hover cue on a fine pointer, while buttons and inline prose links remain silent on hover.
- Confirm anchors remain silent on click and button keyboard activation produces its click cue.
- Confirm touch interaction has no hover cue and buttons still respond to taps.
- Confirm successful email copy produces the success cue and copied state; a rejected clipboard write produces neither.
- Run `bun run check` and `bun run knip`, as required by the repository instructions.

## Non-goals

- Adding Cuelume to Selected Works or describing it as Abhip's project.
- Adding a sound toggle, volume slider, or persisted audio preference.
- Adding sound to every inline link or to button hover.
- Replacing, delaying, or coupling visual feedback to audio playback.
