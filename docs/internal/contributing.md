# Contributing (Maintainer View)

The public-facing quick version is `CONTRIBUTING.md` at the repository
root. This file adds the maintainer-side expectations.

## Review standards

Every PR: CI green (`npm test`), and a human read of the diff.

Additional review by content type:

- **New pages / substantive edits:** check voice and threat-model framing
  against `content-guide.md`; verify cited sources actually support the
  claims (spot-check at least the load-bearing ones).
- **Recommendations:** second reviewer required. Verify no affiliate
  parameters in URLs, drawbacks present, criteria stated, audit links real.
- **Darwin Awards:** second reviewer required. Verify every factual claim
  against the cited sources; check legal accuracy of "charged/convicted"
  language (`adding-a-darwin-award.md`).
- **Templates/CSS:** run the manual QA checklist in `testing.md`.
- **Dependencies:** see `dependencies.md`; be slow to accept.

## What to be suspicious of in PRs

- Links to unknown domains, URL shorteners, or anything with tracking
  parameters (`utm_*`, `ref=`) — strip or reject.
- Raw HTML in Markdown (it passes through the renderer) — review byte by
  byte or ask for plain Markdown.
- Edits to `eleventy.config.js`, workflows, or scripts in a "content" PR.
- New external resource references of any kind (the CSP will block them at
  runtime, but they shouldn't reach main).
- Recommendation changes that read like marketing. Check contributor
  history; vendor-affiliated contributions must be disclosed.

## Tone in review

The project depends on strangers' goodwill. Review the work, not the
person; explain the "why" with links into `docs/internal/`; fix trivia
yourself instead of round-tripping ("nit: typo" is a commit, not a
comment). Reject firmly and kindly when something conflicts with the
project's rules — especially sourcing.

## Licensing of contributions

Content contributions are accepted under CC BY-SA 4.0, code under MIT
(matching the repo licenses). By opening a PR, contributors agree; it's
stated in `CONTRIBUTING.md`.
