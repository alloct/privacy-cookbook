---
title: Email
description: Email cannot be made private end-to-end in practice. What encrypted providers actually protect, and how aliasing limits the damage.
tags:
  - email
  - encryption
status: published
last_reviewed: 2026-08-24
---

Start with the uncomfortable truth: **email is not fixable.** The protocol
predates modern cryptography, every message transits in a format servers can
read, and even a perfectly encrypted mailbox exchanges plaintext with every
correspondent on Gmail or a corporate server. Treat email as a
semi-public postcard system that happens to be load-bearing for your entire
digital identity, and make decisions from there.

## What "encrypted email" providers really offer

Proton Mail and Tuta encrypt your **mailbox at rest** so the provider can't
read stored mail, and encrypt **provider-internal** messages end-to-end. Mail
to and from the rest of the world arrives and leaves as plaintext the
provider necessarily processes, even if it encrypts it immediately after.

That is still a meaningful upgrade over Gmail, whose business model wraps
your correspondence into an advertising identity. It is not
[Signal](/communications/messaging/)-grade confidentiality, and honest
providers say so themselves. PGP can add true end-to-end encryption between
two committed people, but it leaves subject lines and metadata exposed and is
notoriously easy to get wrong; for genuinely sensitive conversations, moving
to an E2EE messenger beats retrofitting email.

## Email's real privacy role: the universal identifier

Your email address is the join key of the data economy. It links your
accounts across services, survives password changes, appears in every breach
dump, and feeds "hashed email" ad matching. This is where you have real
leverage:

**Aliasing.** Services like SimpleLogin (Proton) and addy.io — or a
catch-all address on your own domain — give every service its own address
that forwards to your real inbox. Results: a breach at one service exposes an
address used nowhere else; cross-service identity matching by email fails;
and when an address leaks or attracts spam you disable it, killing the spam
*and* revealing exactly who sold or lost your data. Aliases also compound
with [compartmentalization](/opsec/compartmentalization/) — identities that
never share an address are much harder to link.

A tradeoff stated honestly: the aliasing provider sees your mail flow, and a
custom domain makes every alias on it trivially linkable to you — fine
against advertisers, counterproductive against a motivated investigator.

**Tracker stripping.** Marketing mail embeds tracking pixels reporting when
and where you opened it. Set your client to block remote images by default;
Proton and Tuta do this out of the box.

## Choosing a provider

Criteria that matter: mailbox-at-rest encryption, a jurisdiction and business
model you've considered (you are the customer, not the product — expect to
pay), open-source clients, standard export (IMAP or equivalent) so leaving is
possible, and native alias support. Proton Mail and Tuta are the established
options; a paid mailbox on a reputable standard-IMAP host plus aggressive
aliasing is a defensible alternative if E2EE-at-rest matters less to you than
client flexibility.

## Practical priorities

1. Your email account is the master key to everything (password resets), so
   secure it first: unique passphrase,
   [strong MFA](/accounts/multi-factor-authentication/), no SMS recovery.
2. Adopt aliasing for all *new* signups today; migrate old accounts
   opportunistically as you touch them.
3. Move the conversations that actually need confidentiality off email
   entirely.
4. Delete old mail you have no reason to keep. Twenty years of archived
   correspondence is a subpoena-able, breach-able biography — see
   [Data Minimization](/data/data-minimization/).
