# Deployment

## How it works

Deployment is fully automated by `.github/workflows/ci.yml`:

1. Every push and PR runs the **test job**: `npm ci`, secret scan,
   `npm run validate`, `npm run build` (with production `PATH_PREFIX` and
   `SITE_URL`), `npm run check-links`.
2. On pushes to `main` only, the **deploy job** takes the built `_site/`
   artifact and publishes it to GitHub Pages via the official
   `configure-pages` → `upload-pages-artifact` → `deploy-pages` flow
   (OIDC-based; no stored secrets).

There is no manual deploy step. Merging to `main` is deploying.

## Environment variables (set in the workflow)

| Variable | Production value | Purpose |
| --- | --- | --- |
| `PATH_PREFIX` | `/privacy-cookbook/` | Eleventy's HtmlBasePlugin rewrites all root-relative URLs for project-page hosting |
| `SITE_URL` | `https://alloct.github.io/privacy-cookbook` | Absolute URLs: canonical links, Open Graph, sitemap, robots.txt |

If the repository is ever renamed, or moves to a custom domain or user
page, these two values (and `site.repo` in `src/_data/site.js`) are the
only things to change. For a custom domain at the root, set
`PATH_PREFIX=/` and `SITE_URL=https://example.org`.

## One-time repository setup

The workflow passes `enablement: true` to `configure-pages`, so Pages is
enabled automatically on the first successful deploy — no manual setup
step. Still worth confirming once in Settings → Pages: source shows
"GitHub Actions" and **Enforce HTTPS** is on (default for github.io).
Recommended: branch protection on `main` requiring the CI check and one
review.

Note: on **private** repositories, GitHub Pages requires a paid plan, so
the deploy job fails (the test job still runs and gates PRs). On public
repositories Pages is free — flipping the repo public
(`gh repo edit --visibility public`) is the expected path to going live;
the next push to main deploys.

## Rollback

Two options, both fast:

- **Revert:** `git revert <bad-commit>` on `main`; CI redeploys the
  previous content in a few minutes. Preferred — history stays honest.
- **Re-run:** in the Actions tab, re-run the deploy job of the last good
  commit's workflow run (Actions → select run → "Re-run jobs"). Useful if
  main is fine and a deploy itself glitched.

There is no state anywhere except the git history, so rollback is always
complete and always safe.

## Verifying a deploy

After the workflow finishes: check the Actions run summary for the Pages
URL, load `/` and one deep article, hard-refresh (`Ctrl+F5`) to bypass
cache, and confirm `/search/` works (its index is regenerated every build).
