# The Privacy Cookbook

A practical field guide to digital privacy and operational security:
threat modeling, hardening guides, criteria-driven tool recommendations,
and a collection of real, sourced OPSEC failures
(the [Darwin Awards](src/darwin-awards/)).

**Live site:** https://alloct.github.io/privacy-cookbook/ (once Pages is
enabled — see [deployment](docs/internal/deployment.md)).

Inspired by the approach of [Privacy Guides](https://www.privacyguides.org/)
— threat-model-first advice, stated criteria, community maintenance — but
**independent and unaffiliated**: different people, different codebase,
different editorial decisions, and an original design.

## Goals

- **Content first.** Adding an article is a Markdown file plus one line of
  navigation JSON. No application code involved.
- **Practice what we preach.** No analytics, no cookies, no ads, no
  affiliate links, no third-party requests of any kind. Two small
  first-party scripts (theme toggle; search on the search page only);
  everything else works with JavaScript disabled.
- **Minimal attack surface.** Static HTML/CSS on GitHub Pages, six dev-time
  dependencies, SHA-pinned CI actions, least-privilege workflows.
- **Honest claims.** Every guide states its threat model; recommendations
  list drawbacks; the [site privacy page](src/about/site-privacy.md)
  documents what the host necessarily processes instead of pretending
  nothing is.

## Technology

[Eleventy](https://www.11ty.dev/) v3 renders Markdown + Nunjucks into
static HTML; [Pagefind](https://pagefind.app/) builds a fully local,
self-hosted search index at build time. The evaluation of alternatives is
documented in [docs/internal/architecture.md](docs/internal/architecture.md).

```
src/            content (one directory per section), templates, assets
docs/internal/  maintainer documentation (how to do everything)
scripts/        validation tooling (frontmatter, links, stale content)
.github/        CI + Pages deployment (SHA-pinned actions)
```

## Local development

Prerequisite: Node.js ≥ 20.

```bash
npm ci
npm run serve     # dev server at http://localhost:8080
npm test          # validate frontmatter + build + check all internal links
```

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md). The short version: create a
Markdown file, add a nav entry, open a PR — the
[internal docs](docs/internal/) cover every common task
([adding a page](docs/internal/adding-a-page.md),
[a section](docs/internal/adding-a-section.md),
[a recommendation](docs/internal/adding-a-recommendation.md),
[a Darwin Award](docs/internal/adding-a-darwin-award.md)).

Editorial rules that are enforced in review: threat models before tools, no
absolute security claims, sources for important claims, no affiliate links,
Darwin Awards from public record only. See
[content-guide.md](docs/internal/content-guide.md).

## Security

For vulnerabilities in the site or its pipeline, see
[SECURITY.md](SECURITY.md). The site's own threat model, attack surface,
and the honest limitations of GitHub Pages hosting are documented in
[docs/internal/security.md](docs/internal/security.md).

## Deployment

Merging to `main` deploys: CI validates, builds, link-checks, then
publishes to GitHub Pages via the official OIDC artifact flow — no stored
secrets. Details and rollback procedure:
[docs/internal/deployment.md](docs/internal/deployment.md).

## License

- **Content** (Markdown under `src/`): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Code** (templates, styles, scripts, config): [MIT](LICENSE)

## How this differs from Privacy Guides

Privacy Guides is a large, established community with formal governance and
a broad recommendation catalog. This project is smaller and differently
shaped: a cookbook structure aimed at "what do I do and why," an OPSEC
section built around real failure case studies, and a deliberately tiny
technical footprint (no framework theme, ~1 KB of JavaScript outside
search). If the two disagree on something, read both arguments and check
the sources — that's the habit both sites are trying to teach.
