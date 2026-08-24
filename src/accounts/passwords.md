---
title: Passwords
description: What makes a password strong, why uniqueness beats complexity, and how to generate passphrases you can actually remember.
tags:
  - passwords
  - authentication
status: published
last_reviewed: 2026-08-24
---

Two properties determine whether a password protects you: whether it is
**unique**, and whether it is **hard to guess**. Uniqueness matters more.

## Reuse is the real killer

When a website is breached, its password database ends up in credential lists
that attackers replay against every other major service — an automated
technique called credential stuffing. A strong password reused on two sites is
only as safe as the weaker site's database. This is why "is my password
strong?" is the wrong question. The right question is "does anything else use
this password?"

You cannot maintain hundreds of unique passwords in your head. Nobody can.
That is what a [password manager](/accounts/password-managers/) is for, and it
is why the manager comes first and password advice second.

## What "strong" means

Strength is resistance to guessing, measured in entropy — the number of
possibilities an attacker must try. Length contributes far more than symbol
substitutions. `Tr0ub4dor&3`-style passwords are hard for humans and easy for
cracking rigs; a random six-word passphrase is the opposite.

For passwords a machine stores (the vast majority): let the password manager
generate 20+ random characters. You never type them, so there is no reason to
make them memorable.

For the handful you must memorize — your manager's master password, your
computer login, full-disk encryption — use a **diceware passphrase**: five to
seven words selected randomly from a wordlist, using dice or a trusted
generator. The EFF publishes wordlists designed for this.[^eff] A five-word
passphrase from the EFF long list carries about 64 bits of entropy; seven
words about 90. The words must be *randomly* selected — a sentence you made
up is dramatically weaker than it looks, because humans choose predictable
words in predictable orders.

[^eff]: Electronic Frontier Foundation, [Dice-Generated Passphrases](https://www.eff.org/dice).

## Rules that no longer apply

Current NIST guidance dropped two rituals that refuse to die:[^nist]

- **Scheduled password rotation.** Forced 90-day changes produce `Password1`,
  `Password2`, `Password3`. Change passwords when there is evidence of
  compromise, not on a calendar.
- **Mandatory composition rules.** Requiring `!1Aa` mostly reshapes weak
  passwords into other weak passwords. Length and randomness are what count.

[^nist]: NIST Special Publication 800-63B, [Digital Identity Guidelines: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html).

## Checking for exposure

[Have I Been Pwned](https://haveibeenpwned.com/) indexes public breach data
and can tell you which of your email addresses appear in known breaches. Most
password managers can also check stored passwords against breach corpora
locally or via privacy-preserving hashed lookups. If a password appears in a
breach, change it on that site and anywhere it was reused — then stop reusing.

## Security questions are passwords too

"Mother's maiden name" is a password that is public record. Where a site
forces security questions, generate random answers and store them in your
password manager like any other credential. See
[Account Recovery](/accounts/account-recovery/) for why recovery flows
deserve as much attention as the front door.
