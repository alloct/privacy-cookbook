---
title: "Silk Road: The Altoid Posts"
description: The operator of the largest darknet market was identified by a Google search, because his marketing account once posted his personal Gmail address.
tags:
  - darwin-awards
  - identity-reuse
status: published
last_reviewed: 2026-08-24
---

## Incident

Ross Ulbricht ran the Silk Road darknet market from 2011 to 2013 under the
handle "Dread Pirate Roberts." He was arrested in October 2013 and sentenced
to life in prison.

## What happened

In January 2011, days after Silk Road launched, a user named **altoid**
posted on the Shroomery mushroom forum and on Bitcointalk, casually "asking"
about this new site, early-stage marketing posing as word of mouth. Eight
months later, the same altoid account posted a job listing on Bitcointalk
for a "venture-backed bitcoin startup," telling applicants to contact
**rossulbricht@gmail.com**.

In 2013, IRS investigator Gary Alford ran targeted Google searches for the
earliest mentions of Silk Road, found the altoid posts, and connected the
account to the Gmail address. Records for the Google account narrowed the
investigation to San Francisco, where subsequent surveillance and forensic
work confirmed the identification. Ulbricht was arrested in a public
library with his laptop open and logged into the site's admin panel.

## The OPSEC mistake

One account bridged two lives. The altoid handle belonged to the anonymous
project; the Gmail address belonged to the real person; a single post
connected them, permanently and publicly. Everything that followed (millions in security spending, Tor, encrypted servers) could not undo one
forum post from before the operation mattered.

## Why it mattered

Anonymity failures are retroactive. The post sat in public view for two
years; it only needed to be found once. Early-stage sloppiness, from before
a project seems worth protecting, is indexed, archived, and waiting.

## How it could have been avoided

Strict separation from day one: the identity that promotes a project must
share nothing (no handles, no email addresses, no writing quirks) with the
person behind it. And identities cannot be retrofitted: by the time
something is worth protecting, its history already exists.

## Defensive lesson

Whatever you may someday want unlinked from you, a pseudonymous blog, an
activist account, a business venture, build the separation **before** the
first post, not after the project succeeds. Old posts don't expire; search
only gets better. See
[Identity Compartmentalization](/opsec/compartmentalization/).

## Sources

- [Ars Technica: "The incredibly simple story of how the gov't Googled Ross Ulbricht"](https://arstechnica.com/tech-policy/2015/01/the-incredibly-simple-story-of-how-the-govt-googled-ross-ulbricht/) (2015)
- [BBC News: "Silk Road: How FBI closed in on suspect Ross Ulbricht"](https://www.bbc.co.uk/news/technology-24371894) (2013)
- [FBI: Ross William Ulbricht's Laptop](https://www.fbi.gov/history/artifacts/ross-william-ulbrichts-laptop)
