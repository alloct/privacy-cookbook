# Troubleshooting

## Build fails

**`Error: template not found` / Nunjucks errors** — a layout path in
frontmatter or an include name is wrong. Layout values are relative to
`src/_includes/`: `layouts/article.njk`, not `_includes/layouts/…`.

**YAML frontmatter errors** — run `npm run validate`; it reports the file
and the parse error. Usual causes: unquoted colons in titles
(`title: "Desktop: Windows"` needs the quotes), tab characters, a missing
closing `---`.

**A page renders empty or as raw markup** — check the frontmatter block is
the very first bytes of the file (no BOM, no leading blank line).

**Windows: `node` not recognized** — Node isn't on PATH in this terminal;
restart the terminal, or install Node LTS.

## Links

**`check-links` fails on a page you didn't touch** — someone's nav entry or
cross-reference points at your renamed/removed page. The error message
names the referring file; fix the reference or restore a stub
(`editing-a-page.md`).

**Anchor errors (`broken anchor "#..."`)** — heading anchors are generated
from heading text (lowercased, hyphenated). If you reworded a heading,
update links that pointed at the old id.

## Search

**Search doesn't work on `npm run serve`** — expected; the index builds in
`npm run build`. See `search.md` for the local test recipe.

**A page is missing from results** — confirm it renders inside a layout
with `data-pagefind-body` (article/section layouts have it) and was present
in the last full build.

## Deployment

**Workflow succeeded but the site didn't change** — CDN cache; hard-refresh
(`Ctrl+F5`) and give it ~10 minutes. Confirm you're looking at the deploy
of your commit (Actions run lists the SHA).

**Pages returns 404 for everything** — Settings → Pages → Source must be
"GitHub Actions". On a private repo, Pages requires a paid plan.

**Styles/images broken in production but fine locally** — almost always a
hardcoded absolute path missing the `/privacy-cookbook/` prefix. Use
root-relative paths in source (`/assets/…`) and let the build add the
prefix; never write the prefix yourself (`github-pages.md`).

## Dark mode

**Colors wrong in one theme** — the dark palette is defined twice
(media-query block and `[data-theme="dark"]` block); a token changed in
only one. See `styling.md`.

## Still stuck

Open an issue with: the command you ran, full output, OS, and Node version
(`node --version`). Build problems are almost always reproducible from
exactly that.
