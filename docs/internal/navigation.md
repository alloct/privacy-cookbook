# Navigation

All navigation is driven by one file: **`src/_data/nav.json`**. No template
edits are ever needed to change navigation.

## Structure

```json
[
  {
    "title": "Accounts",            // section display name
    "url": "/accounts/",            // section index URL (must exist)
    "items": [
      { "title": "Passwords", "url": "/accounts/passwords/" }
    ]
  }
]
```

- Array order = display order, everywhere.
- Every `url` must correspond to a real page; `npm run check-links` fails
  the build if a nav entry points nowhere (the sidebar renders on every
  page, so one bad URL fails loudly).

## What consumes nav.json

| Consumer | What it renders |
| --- | --- |
| `partials/sidebar.njk` | The full section tree on every page; the current section's `<details>` is expanded; the current page gets `aria-current="page"`. |
| `layouts/section.njk` | Section index pages list their own `items` as cards, pulling each page's `description` from its frontmatter. |
| `index.njk` (home) | The "Browse the cookbook" grid, pulling each section index's `description`. |

## Mobile behavior

There is no JavaScript menu. On narrow screens the header shows a **Menu**
link that jumps to the navigation, which sits after the article in the
document; a "Back to top" link returns. On wide screens the same navigation
renders as a sticky sidebar. This is deliberate: it works with JS disabled,
costs nothing, and screen readers get one consistent nav landmark
(`<nav aria-label="Site sections">`).

## Conventions

- Keep item titles short; they render in a 17rem sidebar.
- Don't nest deeper than section → page. If a section needs sub-groups,
  that's the signal to split it into two sections.
- Pages may exist without nav entries (drafts, stubs); they're reachable by
  URL and search. Anything meant for readers belongs in the nav.
