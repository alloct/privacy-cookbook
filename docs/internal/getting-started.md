# Getting Started (Maintainers and Contributors)

## Prerequisites

- **Node.js 20 or later** (the site is tested on Node 24). `node --version`
  to check.
- **Git.**

That's the entire toolchain.

## First run

```bash
git clone https://github.com/alloct/privacy-cookbook.git
cd privacy-cookbook
npm ci          # install exact locked dependencies
npm run serve   # dev server at http://localhost:8080
```

`npm run serve` rebuilds on file changes. Search does not work on the dev
server by default (the Pagefind index is generated at build time) — see
`search.md` if you need to test it locally.

## The commands

| Command | What it does |
| --- | --- |
| `npm run serve` | Development server with live reload |
| `npm run build` | Full production build into `_site/` (Eleventy + Pagefind) |
| `npm run validate` | Checks frontmatter on every content page |
| `npm run check-links` | Verifies every internal link/anchor/asset in the built site |
| `npm run find-stale` | Lists pages whose `last_reviewed` is over a year old |
| `npm test` | validate + build + check-links (what CI runs) |

## Typical contribution flow

1. Branch: `git checkout -b my-change`
2. Edit or add Markdown under `src/<section>/` (see `adding-a-page.md`)
3. Preview with `npm run serve`
4. `npm test`
5. Commit, push, open a pull request

CI runs the same `npm test` on your PR. If it's green locally, it will be
green in CI.

## Where things are

- Add or edit **content** → `src/<section>/*.md` (`adding-a-page.md`)
- Change **navigation** → `src/_data/nav.json` (`navigation.md`)
- Change **styling** → `src/assets/css/site.css` (`styling.md`)
- Change **layouts/HTML** → `src/_includes/` (rarely needed)
- **Everything else** → the rest of this directory, one file per task
