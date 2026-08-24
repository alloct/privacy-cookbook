# Dependencies

Every dependency is supply chain. The policy: **each direct dependency must
justify itself**, and the list should embarrass nobody.

## Current direct dependencies (all dev-time; the served site has none)

| Package | Why it exists |
| --- | --- |
| `@11ty/eleventy` | The static site generator — the one big, load-bearing choice (see `architecture.md`) |
| `pagefind` | Static search indexing; the only alternative to shipping a worse hand-rolled search |
| `markdown-it-anchor` | Heading ids + self-links; required for TOC and deep links |
| `markdown-it-container` | The `::: note` callout syntax |
| `markdown-it-footnote` | Footnote/sources rendering |
| `js-yaml` | Frontmatter parsing in `scripts/validate-content.mjs` |

`sharp` is used ad hoc for brand-asset generation and intentionally **not**
listed in `package.json` (native binary, rarely needed) — see `images.md`.

## Rules

- **Lockfile always.** `package-lock.json` is committed; CI installs with
  `npm ci` (exact versions, fails on drift).
- **Adding a dependency requires a reason in the PR description** and a
  glance at the package: maintenance activity, install scripts, dependency
  fan-out. Prefer zero-dependency tools; prefer copying 30 lines over
  importing 3,000.
- **Nothing client-side.** No runtime JS dependencies are permitted without
  revisiting the architecture doc; the site's promise is first-party-only.

## Updating

Routine (monthly-ish, or on advisory):

```bash
npm outdated             # see what's behind
npm update               # semver-compatible bumps, updates lockfile
npm test                 # full verification
```

Major-version bumps: read the changelog first (Eleventy majors occasionally
change template semantics), bump one package per PR, run `npm test` and a
visual spot-check.

Security advisories: `npm audit` for the report. Dependabot (configured in
`.github/dependabot.yml`) opens PRs for vulnerable versions — merge them
promptly after CI passes.

## Node itself

The engines field requires Node ≥ 20; CI pins the major version in the
workflow. When updating the CI Node version, update `engines` and this doc
together.
