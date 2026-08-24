---
title: "AlphaBay: The Welcome Email"
description: The largest darknet market emailed every new user from its operator's personal Hotmail address — the same one on his LinkedIn.
tags:
  - darwin-awards
  - identity-reuse
  - infrastructure
status: published
last_reviewed: 2026-08-24
---

## Incident

Alexandre Cazes ("Alpha02") created and ran AlphaBay, which by 2017 was the
largest darknet market ever operated. He was arrested in Thailand in July
2017 during Operation Bayonet and died in custody days later.

## What happened

When AlphaBay launched in late 2014, its automated welcome and
password-reset emails carried a giveaway in their headers: the address
**pimp_alex_91@hotmail.com**. Canadian authorities established that the
account belonged to Alexandre Cazes, born October 19, 1991 — the "91" was
his birth year. The same address appeared on his LinkedIn profile, his
legitimate computer-repair business, and — attached to the Alpha02 handle
itself — in a 2008 French-language tech forum post that included his real
name.

At arrest, per the forfeiture complaint, his laptop was open, unencrypted,
and logged into AlphaBay's administration — with text files of the site's
passwords and a spreadsheet of his assets on it.

## The OPSEC mistake

Three compounding failures: **infrastructure reuse** (a personal email
account wired into the market's automated mail), **historical identity
reuse** (the Alpha02 handle carried years of pre-crime history attached to
his real name), and **no encryption at the endpoint** where everything
converged.

## Why it mattered

The welcome email put the join between operator and operation into the
inbox of every user — and therefore of any investigator who simply signed
up. The 2008 forum post meant the pseudonym itself was pre-linked to his
identity years before AlphaBay existed. No amount of Tor addresses the fact
that the system sending your mail is configured with your own account.

## How it could have been avoided

Operational infrastructure built exclusively from identities and accounts
created for the operation; a handle with no history; and the assumption
that any automated system leaks its configuration — headers, banners,
error messages — to everyone it touches.

## Defensive lesson

Automated systems are honest: email headers, metadata, and error output
faithfully report how things are actually configured, not how you intended
them. When you set up anything that sends messages on your behalf —
newsletters, forms, servers — audit what it discloses. And a
[compartment](/opsec/compartmentalization/) that reuses an old handle
inherits that handle's entire searchable history.

## Sources

- [Ars Technica: "DOJ announces official takedown of AlphaBay"](https://arstechnica.com/tech-policy/2017/07/doj-announces-official-takedown-of-alphabay-worlds-largest-dark-web-market/) (2017)
- [DEA press release: "AlphaBay, the Largest Online 'Dark Market,' Shut Down"](https://www.dea.gov/press-releases/2017/07/20/alphabay-largest-online-dark-market-shut-down) (2017), with the forfeiture complaint attached
- [Vice: "Alleged Dark Web Kingpin Doxed Himself With His Personal Hotmail Address"](https://www.vice.com/en/article/alleged-dark-web-kingpin-doxed-himself-with-his-personal-hotmail-address/) (2017)
