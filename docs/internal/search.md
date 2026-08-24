# Search

Search is provided by [Pagefind](https://pagefind.app/), which builds a
static index from the rendered HTML at build time. It is fully self-hosted:
the index and the UI script are files in `_site/pagefind/`, queries execute
in the visitor's browser, and nothing is transmitted anywhere.

## How it works

1. `npm run build` runs Eleventy, then `pagefind --site _site`.
2. Pagefind crawls `_site/**/*.html`, indexing only content inside
   elements marked `data-pagefind-body` (set on `<article>` in the article
   and section layouts — so headers, navigation, and footers aren't
   indexed, and pages without the attribute, like the search page itself,
   are skipped). Elements marked `data-pagefind-ignore` (TOC, meta rows,
   page lists) are excluded.
3. The output is a chunked index in `_site/pagefind/`; browsers download
   only the fragments a query needs, so search stays fast as the site
   grows into thousands of pages.
4. `/search/` loads `pagefind-ui.js` + CSS (self-hosted) and initializes it
   via `src/assets/js/search-init.js`. Styling hooks are the
   `--pagefind-ui-*` custom properties in `site.css`, wired to the site's
   theme tokens so search follows dark mode automatically.

## Search in local development

`npm run serve` (Eleventy dev server) does not run Pagefind, so `/search/`
shows a loading failure locally. To test search:

```bash
npm run build
npx http-server _site -p 8080
```

This is the production behavior exactly.

## Tuning results

- **Exclude something from the index:** add `data-pagefind-ignore` to the
  element (template change) or `data-pagefind-ignore` on a wrapper div in
  Markdown via HTML.
- **Page titles** come from the `h1`; **descriptions/snippets** from
  indexed content. No per-page config is normally needed.
- Weighting, filters, and metadata are available via `data-pagefind-*`
  attributes if the site ever needs faceted search — see Pagefind's docs.

## No-JS behavior

The search page explains that search needs JavaScript and points to the
navigation and sitemap. Everything else on the site works without JS; this
is the documented, accepted exception.
