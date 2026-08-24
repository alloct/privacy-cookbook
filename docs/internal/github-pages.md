# GitHub Pages Notes

Reference for the quirks of this specific host. Deployment mechanics are in
`deployment.md`; security implications in `security.md`.

## What Pages gives us

- Free static hosting (public repos) with global CDN caching.
- Automatic HTTPS with HSTS on `*.github.io`.
- OIDC-based deployment from Actions — no tokens to store or rotate.
- Serving from our Actions-built artifact (no Jekyll; we don't need a
  `.nojekyll` file because the artifact flow bypasses Jekyll entirely).

## What Pages does not give us

- **Custom HTTP headers.** No CSP/Permissions-Policy/nosniff at the header
  level; we compensate with meta-tag CSP and document the residual gaps
  (`security.md`).
- **Server-side redirects.** Moved pages need stub pages or
  `<meta http-equiv="refresh">`; prefer not moving URLs.
- **Custom 404 logic.** `404.html` at the site root is served for misses —
  Eleventy generates it from `src/404.njk`.
- **Access control.** Everything published is public; that's the point,
  but remember it when previewing unfinished work (drafts pushed to main
  go live).

## Project-site URL prefix

As a project page, the site lives under
`https://<owner>.github.io/privacy-cookbook/`. Consequences:

- All internal URLs are written root-relative in source (`/accounts/…`) and
  rewritten at build by `HtmlBasePlugin` using `PATH_PREFIX`. Never
  hardcode the prefix in content.
- Absolute URLs (canonical, OG, sitemap) come from `SITE_URL`, which
  *includes* the prefix.

## Custom domain (if ever)

Add a `CNAME` file via Pages settings, set DNS per GitHub docs, switch
`PATH_PREFIX` to `/` and `SITE_URL` to the domain, keep "Enforce HTTPS" on.
Also update `site.repo` edit links if the repo location changes. HSTS
preload submission becomes possible on a custom domain if desired.

## Caching

Pages sets short CDN cache times (~10 minutes) — deploys propagate quickly,
but a just-deployed change may need a hard refresh. Asset filenames aren't
content-hashed (deliberate simplicity); if an asset change doesn't appear,
that's cache, not a broken deploy.
