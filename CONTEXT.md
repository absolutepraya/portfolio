# Portfolio Experience

This context defines the vocabulary for the portfolio's experience section and its recruiter-facing presentation.

## Experience presentation

**Experience entry**:
 A role at an organization with its date, description, visual identity, organization link, and optional earlier roles.

**Experience row**:
 One visible experience entry inside the shared frame. It keeps identity information on the left and the existing description on the right at desktop widths, then stacks those areas on mobile.
 _Avoid_: standalone card, timeline node

**Experience metadata**:
 The role title, organization logo and link, and date shown in the left column of an experience row.
 _Avoid_: interactive role header, generated summary

**Experience description**:
 The existing Markdown description and optional earlier-role information belonging to an experience entry.
 _Avoid_: rewritten copy, generated summary

**Framed experience list**:
 The presentation where visible experience rows share one rounded bordered frame matching the desktop width of the Victory Laps grid, with the shared three-part `BotBorder` treatment between rows and no vertical timeline connectors.
 _Avoid_: stacked cards, disclosure timeline, carousel

**More roles disclosure**:
 The existing bottom “Show More” control that reveals the remaining experience rows after the initial recruiter-focused set.
 _Avoid_: per-role accordion, hidden category filter

**Description disclosure**:
 The existing gradient fade and “Read more” interaction that reveals the complete Markdown description when it is longer than the collapsed height.
 _Avoid_: rewritten preview, truncated copy

**Organization link**:
 The existing link from an organization's name to its external website. It remains a normal external link inside the metadata column.
 _Avoid_: nested interactive link

**Existing visual system**:
 The portfolio's established fonts, colors, icons, logos, borders, Markdown treatment, and motion language. Layout changes preserve this system.
 _Avoid_: visual redesign, style refresh
