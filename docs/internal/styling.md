# Styling

All styling lives in one hand-written file: **`src/assets/css/site.css`**.
No preprocessor, no framework, no build step — edit and reload.

## Design tokens

Everything is driven by CSS custom properties defined at the top of the
file, in three blocks:

1. `:root` — the light palette and shared tokens (fonts, widths).
2. `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`
   — dark palette for users whose system prefers dark.
3. `:root[data-theme="dark"]` — the same dark palette, applied when the
   user explicitly toggles.

**When changing colors, change all three blocks** (dark appears twice — a
media query can't be combined with an attribute selector in one rule).

The palette derives from the pigeon mark: slate blue (`--accent`), warm tan
(`--tan`), paper (`--bg`), muted salmon (`--salmon`, reserved for
danger/negative states). Check contrast before changing ink/background
pairs: body text and link colors must stay ≥ 4.5:1 against their
backgrounds (WCAG AA).

## Type

System font stacks only — **never add a webfont**; the CSP and the
site-privacy page both promise no external requests, and self-hosted fonts
are weight we don't need. Body text is the Charter/Georgia serif stack; UI
elements (nav, header, meta lines, tables) use the system sans stack; code
uses the system mono stack.

## Conventions

- Class naming is loose BEM (`.article__lede`, `.callout--warning`).
- Mobile-first: base styles are the narrow layout; the desktop grid arrives
  in a `@media (min-width: 64rem)` block.
- Motion: any animation/transition must respect the existing
  `prefers-reduced-motion` block (it globally shortens durations — putting
  new motion outside it breaks the promise).
- Focus states: don't remove outlines; the global `:focus-visible` rule is
  the keyboard affordance.
- Print styles at the bottom hide chrome; keep them working when adding
  new page furniture.

## Adding component styles

New content patterns (a new callout type, a new list style) get:

1. Tokens only from the existing custom properties (so dark mode works for
   free).
2. A comment header in the relevant section of `site.css`.
3. A quick check in both themes and at 360 px width.

If you're adding a class in a *layout template* to hook styling, that's the
one case where content work touches `src/_includes/` — keep the markup
semantic (real lists, real headings) and re-run `npm test`.
