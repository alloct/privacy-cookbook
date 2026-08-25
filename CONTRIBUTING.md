# Contributing to The Privacy Cookbook

Thanks for helping. Corrections, updates, and well-sourced new articles are
all welcome. A project like this stays trustworthy through review and
revision.

## The short path

1. Fork and clone the repository.
2. `npm ci` (you need Node.js 20 or newer, nothing else).
3. Preview locally: `npm run serve`, then open http://localhost:8080/
   in your browser. On Windows you can also double-click `preview.cmd`,
   which starts the server and opens the browser for you.
4. Write or edit Markdown under `src/`.
5. `npm test` runs exactly what CI runs, so if it passes locally your
   pull request will be green.
6. Commit and open a pull request.

Search does not work on the live-reload server. To try search, run
`npm run build` and serve the `_site/` folder instead.

## What to work on

- **Corrections.** Factual errors, dead links, outdated tool information.
  The most valuable contribution type; open a PR directly, or an issue if
  you can't fix it yourself.
- **Reviews of stale pages.** `npm run find-stale` lists pages due for
  re-verification.
- **New articles.** Open an issue first for anything substantial so we can
  agree on scope before you write.
- **Darwin Awards.** New entries need public sources: court records,
  official releases, established reporting. Follow the structure of an
  existing entry in `src/darwin-awards/`.

## Adding a page

A page is a Markdown file in a section directory plus one navigation
entry. No application code involved.

1. Create `src/<section>/your-page.md` with this frontmatter:

   ```yaml
   ---
   title: Your Page Title
   description: One sentence shown in search results and section indexes.
   tags:
     - example
   status: draft
   last_reviewed: 2026-08-25
   ---
   ```

2. Add the page to `src/_data/nav.json` under its section.
3. Set `status: published` when it is ready; drafts are excluded from the
   built site.

For a new section, copy an existing section directory's
`<section>.11tydata.json` and index page, then add the section to
`nav.json`. Existing pages are the best templates: recommendation pages
follow a fixed structure (criteria, candidates, drawbacks), and Darwin
Awards entries follow a fixed structure (incident, mistake, lesson,
sources).

## Editorial ground rules

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
content PR, and vendor-affiliated recommendations. Disclose your
affiliations: disclosed involvement is fine, hidden involvement isn't.

## Licensing

By contributing you agree your contributions are licensed under the
project's licenses: content under CC BY-SA 4.0, code under MIT.
