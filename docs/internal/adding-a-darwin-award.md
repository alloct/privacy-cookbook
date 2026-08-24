# Adding a Darwin Award

Darwin Awards document **real, publicly reported OPSEC failures by threat
actors**, for defensive education. These pages have the strictest sourcing
rules on the site because they make claims about real people and real
cases.

## Hard rules

1. **Public record only.** Every factual claim must trace to court filings,
   government press releases, or established journalism. If the best source
   is a forum rumor or a podcast retelling, the entry doesn't get written.
2. **No invention, no embellishment.** Don't dramatize, don't fill gaps
   with plausible detail, don't state contested claims as settled. Use
   "per the affidavit," "reportedly" where the record itself hedges.
3. **No glorification.** The subject did harm; the interest is the mistake.
   Neutral tone, no antihero framing, no score-keeping.
4. **Defense only.** Explain what the mistake teaches defenders. Never
   write the entry as a how-to-evade-law-enforcement guide; the "avoided"
   section describes the *class* of countermeasure, not operational
   instructions.
5. **Convictions vs. allegations.** Say "charged," "convicted," "per the
   complaint" accurately. People are acquitted sometimes; the record is
   the record.

## Template

Create `src/darwin-awards/<short-slug>.md`:

```markdown
---
title: "Short Memorable Title"
description: One sentence: who was identified by what mistake.
tags:
  - darwin-awards
  - <mistake-category>     # identity-reuse, metadata, ip-exposure, ...
status: draft
last_reviewed: 2026-08-24
---

## Incident

Two or three sentences: who, what operation, what outcome (arrest,
conviction, identification).

## What happened

The factual narrative, sourced. Keep it tight — a few paragraphs.

## The OPSEC mistake

Name the failure class explicitly (identity reuse, fail-open tooling,
metadata leak...).

## Why it mattered

Why this particular mistake was decisive: what property of logs, archives,
or correlation made it unrecoverable.

## How it could have been avoided

The class of countermeasure, briefly. Not an operational manual.

## Defensive lesson

The takeaway for legitimate defenders, with links into the relevant
cookbook guides.

## Sources

- [Primary source — court filing, press release](https://...)
- [Established reporting](https://...) (year)
```

## Steps

1. Verify the story against at least one primary source (court document,
   agency release) **or** two independent established outlets. Save the
   links.
2. Write the entry with the template. Keep it concise — 400–700 words.
3. Add to the Darwin Awards block in `src/_data/nav.json`.
4. `npm test`, PR. Darwin Award entries require a second reviewer checking
   sources before `status: published`.
