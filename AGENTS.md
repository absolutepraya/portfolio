# Portfolio Agent Guide

Read `CLAUDE.md` before editing this repository. It contains the project structure, commands, deployment contract, and required verification.

## Experience Copy

- `src/data/experience_data.ts` is the source of truth for Experience text. It uses Markdown.
- Use links for named products, platforms, and services when an external homepage helps the visitor. Add or update their mappings in `src/data/tech_mentions.ts` only when a genuine, high-resolution asset is available.
- The first mapped occurrence of a technology in one Experience description receives the linked name and icon. Repeat mentions must remain ordinary text, with no second link or icon.
- Keep languages, frameworks, generic techniques, and acronyms as ordinary text unless a specific exception is requested. Do not add icons or anchors for languages such as Go and Python.
- Never combine a product link with bold styling. Links explain what the technology is; bold explains the portfolio contribution.
- Bold sparingly: at most one owned system or initiative and one measurable result per bullet. Prefer project names, systems personally built, and concrete outcomes. Do not bold implementation details, generic technical terms, repeated phrases, or anonymized client descriptors.
- Keep each bullet readable as prose. Do not turn a dense technical description into a catalog of blue links or bold labels.

## Technology Assets

- Production assets belong in `src/assets/` and must be explicitly imported by `tech_mentions.ts`.
- The complete Azure reference library is under `references/microsoft-azure-icons/`. It is reference-only and must never be imported wholesale or exposed in the production build. See its `README.md` and `CATALOG.txt` before selecting a service mark.
- Preserve source provenance for vendor assets. Prefer an official product source or official architecture icon pack over recreated or scraped logos.
