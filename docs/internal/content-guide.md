# Content Guide

This is the editorial reference: metadata schema, content lifecycle, style,
and sourcing rules. For the mechanics of creating files, see
`adding-a-page.md`.

## Frontmatter schema

```yaml
---
title: Choosing a Password Manager        # required
description: One or two sentences shown   # required; used in listings,
  in search results and social previews.  # meta description, section pages
tags:                                     # optional; lowercase, hyphenated
  - passwords
  - authentication
status: published                         # required; see lifecycle below
last_reviewed: 2026-08-24                 # required for published pages
---
```

Reserved for future use (accepted by the validator, not yet rendered):
`difficulty`, `audience`, `related`, `contributors`. Add them where they're
useful; rendering can catch up later.

## Content lifecycle

| Status | Meaning | Rendered? |
| --- | --- | --- |
| `draft` | Being written; may be incomplete or wrong | Yes, with a DRAFT badge |
| `review` | Content complete, awaiting editorial review | Yes, with a badge |
| `published` | Reviewed and current | Yes, no badge |
| `needs-review` | Flagged as possibly outdated | Yes, with a badge |
| `deprecated` | Advice no longer recommended; kept for context | Yes, with a badge |
| `archived` | Kept for the record only | Yes, with a badge |

Rules:

- **`last_reviewed` is an editorial statement**, not a build artifact. Update
  it only when a human has actually re-verified the page's claims. It is
  never bumped automatically.
- `npm run find-stale` lists pages not reviewed in over a year. Triage them:
  re-verify and bump the date, or set `status: needs-review` so readers see
  the flag.
- To retire an article: set `deprecated` (still linked, badged) or
  `archived`, and remove it from `nav.json` if it should stop appearing in
  navigation. Don't delete published URLs without need — if a page must
  move, leave the old file as a stub linking to the new location.

## Voice and style

Write like an experienced practitioner explaining something to a smart
friend: direct, calm, concrete, honest about uncertainty.

- **Threat model first.** Any recommendation should say who it protects
  against. "A VPN hides traffic from your ISP but shifts trust to the
  provider" — not "a VPN protects your privacy."
- **No absolutes.** Never "this makes you anonymous/secure." Qualify claims
  or don't make them.
- **No fear, no hype.** No "in today's digital world," no "cutting-edge,"
  no urgency theater. If a sentence would fit in a press release, cut it.
- **Tradeoffs are content.** Every tool's costs get stated next to its
  benefits.
- **Short beats padded.** A 400-word page that says something useful beats
  2,000 words of filler. Don't pad.
- **Link generously within the site.** Cross-references
  (`/start-here/threat-modeling/` etc.) are how readers build understanding.

## Sourcing rules

- Important claims cite sources: standards (NIST, RFCs), official
  documentation, court records, audits, academic work, or established
  reporting. Use markdown footnotes (`[^name]`) for citations; inline links
  for navigation.
- **Never fabricate a source, a statistic, or a URL.** If you can't source
  a claim, weaken it to what you can support or delete it.
- Vendor marketing pages are acceptable only as evidence of what the vendor
  claims, never as evidence the claim is true.
- Darwin Awards entries have stricter rules — see
  `adding-a-darwin-award.md`.

## Callouts

```markdown
::: note
Neutral supplementary information.
:::

::: tip
A useful shortcut or practice.
:::

::: warning
Something likely to go wrong or be misunderstood.
:::

::: danger
Risk of real harm — data loss, exposure, lockout.
:::
```

A custom label works: `::: warning Check your backups first`. Use callouts
sparingly; a page of callouts has none.

## Tables, code, footnotes

- Tables for comparisons (they render responsively; keep to ~5 columns).
- Fenced code blocks with a language hint for anything typed into a
  terminal or config file.
- Footnotes render at the bottom as a sources list: `text[^ref]` plus
  `[^ref]: Source Name, [Title](https://…).`
