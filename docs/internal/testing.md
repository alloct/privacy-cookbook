# Testing

## The test suite

```bash
npm test
```

runs, in order:

1. **`npm run validate`** (`scripts/validate-content.mjs`) — every Markdown
   page under `src/` must have parseable YAML frontmatter, `title`,
   `description`, a valid `status`, and (for published pages) a valid
   `last_reviewed` date that isn't in the future. Descriptions over 300
   characters warn.
2. **`npm run build`** — Eleventy render + Pagefind indexing. Template
   errors, broken frontmatter, and missing includes fail here.
3. **`npm run check-links`** (`scripts/check-links.mjs`) — walks every HTML
   file in `_site/` and verifies every internal `href`/`src`: pages exist,
   assets exist, and `#anchors` resolve to real element ids (including
   cross-page anchors). External URLs are collected but not fetched — see
   below.

CI runs exactly this on every push and pull request, so a green local
`npm test` means a green PR.

## External links

`check-links` doesn't fetch external URLs: network checks in CI are flaky
(rate limits, geo-blocks, transient failures) and would train everyone to
ignore red builds. Instead:

```bash
npm run check-links -- --list-external
```

prints every external URL for manual or ad-hoc review. Checking these
periodically (e.g., quarterly, or with a local `lychee` run) is part of
maintenance; see `release-process.md`.

## Stale content

```bash
npm run find-stale
```

lists published pages whose `last_reviewed` is more than a year old. This
is a maintenance report, not a CI gate — content review requires a human.

## Manual QA checklist

For layout/CSS/template changes, verify by hand (there is intentionally no
browser-automation dependency in this repo):

- Home, one long article, a section index, a Darwin Award, `/search/`
- Both themes (toggle + system preference)
- Narrow viewport (~360 px): menu link, tables scroll, code blocks scroll
- Keyboard-only pass: skip link, tab order, visible focus, details toggles
- `npm run build` output contains no unexpected external URLs:
  `npm run check-links -- --list-external`
