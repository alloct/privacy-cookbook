# Contributing to The Privacy Cookbook

Thanks for helping. Corrections, updates, and well-sourced new articles are
all welcome — a project like this stays trustworthy through review and
revision.

## The short path

```
fork / clone  →  npm ci  →  npm run serve  →  write Markdown
              →  npm test  →  commit  →  pull request
```

You need Node.js ≥ 20 and nothing else. `npm test` runs exactly what CI
runs, so if it passes locally your PR will be green.

## What to work on

- **Corrections** — factual errors, dead links, outdated tool information.
  The most valuable contribution type; open a PR directly, or an issue if
  you can't fix it yourself.
- **Reviews of stale pages** — `npm run find-stale` lists pages due for
  re-verification.
- **New articles** — open an issue first for anything substantial so we can
  agree on scope before you write.
- **Darwin Awards** — new entries need public sources (court records,
  official releases, established reporting). See
  [the entry guide](docs/internal/adding-a-darwin-award.md).

## How to add things

Task-by-task instructions live in [docs/internal/](docs/internal/):

- [Add a page](docs/internal/adding-a-page.md) — a Markdown file + one nav
  entry
- [Add a section](docs/internal/adding-a-section.md)
- [Add a recommendation](docs/internal/adding-a-recommendation.md)
- [Add a Darwin Award](docs/internal/adding-a-darwin-award.md)
- [Add an image](docs/internal/images.md)
- [Edit / retire a page](docs/internal/editing-a-page.md)

## Editorial ground rules

The full guide is [content-guide.md](docs/internal/content-guide.md); the
non-negotiables:

1. **State the threat model.** Who does this advice protect, from whom?
2. **No absolute claims.** "Makes you anonymous/secure" doesn't appear on
   this site.
3. **Source important claims.** Standards, audits, court records, primary
   documentation. Never fabricate a source or statistic.
4. **State the tradeoffs.** Every recommendation lists drawbacks.
5. **No affiliate links, ever.** No tracking parameters in URLs.
6. **Don't pad.** Short and useful beats long and vague.

## What we'll ask about in review

Raw HTML in Markdown, new external domains, edits to config/workflows in a
content PR, and vendor-affiliated recommendations (disclose your
affiliations — disclosed involvement is fine, hidden involvement isn't).

## Licensing

By contributing you agree your contributions are licensed under the
project's licenses: content under CC BY-SA 4.0, code under MIT.
