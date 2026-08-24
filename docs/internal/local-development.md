# Local Development

## Dev server

```bash
npm run serve
```

Serves at `http://localhost:8080` with live reload. Eleventy watches
`src/`; edits to Markdown, templates, and CSS rebuild automatically.
Changes to `eleventy.config.js` or files in `src/_data/` require restarting
the server in some cases — restart if a change doesn't appear.

## Production build

```bash
npm run build
```

Writes the complete site to `_site/`. This runs Eleventy, then Pagefind.
`_site/` is gitignored; never commit it.

To preview the production build exactly as deployed (including search),
serve `_site/` statically, e.g.:

```bash
npx http-server _site -p 8080
```

## Path prefix

GitHub Pages serves the site under `/privacy-cookbook/`. Locally everything
runs at `/`. This is handled by two environment variables consumed at build
time (see `deployment.md`); you don't set them for local work. If you need
to reproduce the production URL layout locally:

```powershell
$env:PATH_PREFIX="/privacy-cookbook/"; $env:SITE_URL="http://localhost:8080/privacy-cookbook"; npm run build
```

(Unset them afterward or subsequent local builds will keep the prefix.)

## Windows notes

- Use PowerShell or Git Bash; all npm scripts are cross-platform.
- If `node` isn't found after installing Node, restart the terminal so PATH
  updates apply.

## Editor setup

No required tooling. The repository is plain Markdown, JSON, CSS, and
Nunjucks. If your editor supports EditorConfig-style defaults: 2-space
indentation, UTF-8 without BOM, LF or CRLF both fine (Git handles it).
