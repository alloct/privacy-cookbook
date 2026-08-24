---
title: Data Minimization
description: The only defense that works retroactively is data that was never collected. Practical minimization for forms, accounts, and archives.
tags:
  - fundamentals
  - minimization
status: published
last_reviewed: 2026-08-24
---

Every other control in this cookbook protects data that exists. Minimization
is the only one that works by making the data not exist — and data that was
never collected can't be breached, subpoenaed, sold, or leaked by anyone,
ever, with no maintenance on your part.

It's also the control with the worst marketing, because nobody can sell you
"less."

## Stop the intake

**Forms lie about necessity.** Most fields are wanted, not needed. Give
accurate data only where inaccuracy has legal or practical consequences
(government, banking, healthcare, shipping addresses). Everywhere else,
supply the minimum, and treat optional fields as what they are. A birthday on
a retailer account is breach fodder that also happens to be a
[security question answer](/accounts/account-recovery/).

**Aliases and secondary identifiers.** Give services an
[email alias](/communications/email/) instead of your primary address, and a
VoIP or secondary number where a phone number is demanded without a real
need. Your primary identifiers should be reachable by institutions, not by
every loyalty program that asked nicely. Payment can be minimized too:
virtual card numbers (offered by several banks and services) give each
merchant a distinct, cancelable number.

**Guest checkout exists.** An account is a durable record with your name on
it; a one-time purchase doesn't need one.

**App permissions are collection pipes.** Location, contacts, and microphone
access feed databases, not just features. Deny by default, grant
while-in-use, and audit quarterly — the phone platforms now make this easy
([Devices](/devices/)).

## Shrink the stock

Collection you can't prevent, you can often expire:

- **Delete dormant accounts.** Each one is standing exposure — a future
  breach, a reusable identity, an [account-recovery](/accounts/account-recovery/)
  path you forgot you had. Directories like JustDeleteMe index the deletion
  procedures services prefer to hide.
- **Set retention where platforms allow it.** Google auto-delete for
  activity and location, disappearing messages in
  [messengers](/communications/messaging/), history limits in browsers.
  A one-time setting beats a recurring chore.
- **Prune your own archives.** Decades of email, chat exports, and cloud
  folders are a subpoena-able biography (see
  [Backups](/data/backups/) for the tension with keeping what matters — the
  resolution is deliberate keeping, not accidental hoarding).
- **Data-broker removal.** In the US, brokers republish what they scrape, so
  removal is a subscription chore rather than a victory — services exist to
  automate it, and minimizing what enters the pipeline upstream is the more
  durable fix.

## The design principle

When you have a choice between two ways to do anything, prefer the one that
creates the smaller record: the messenger that
[retains less](/communications/metadata/), the payment that shares less, the
form with more blanks, the account not created. Minimization isn't a weekend
project; it's a tiebreaker you apply for free, forever.
