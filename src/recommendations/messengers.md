---
title: "Recommendations: Messengers"
description: Signal as the default, SimpleX for metadata-critical cases, and honest notes on WhatsApp, Telegram, and iMessage.
tags:
  - messaging
  - tools
  - recommendations
status: published
last_reviewed: 2026-08-24
---

Background: [Messaging](/communications/messaging/) explains end-to-end
encryption and the settings that matter;
[Communication Metadata](/communications/metadata/) explains why "encrypted"
is only half the question.

## Signal — default recommendation

**What it is:** an open-source, end-to-end-encrypted messenger run by a
nonprofit, whose protocol is the industry reference implementation.

**Who it's for:** everyone, for everything — the point of a messenger is
the people on it, and Signal is the strong option with mainstream reach.

**Why:** E2EE always on for messages, calls, and groups with no unencrypted
mode to mis-select; metadata retention demonstrated to be near-zero by its
published responses to actual subpoenas;[^sig] sealed sender and private
contact discovery reduce what the server can learn structurally; usernames
now allow hiding your phone number from contacts; disappearing messages,
safety-number verification, encrypted local backups.

**Drawbacks:** registration still requires a phone number (visible to
Signal, though hideable from contacts) — a real limitation for
[compartmentalized identities](/opsec/compartmentalization/); centralized
infrastructure, so availability depends on one organization; no federation.

**Licensing:** open source (AGPL clients/server); funded by the Signal
Foundation.

[^sig]: Signal, [Government Requests](https://signal.org/bigbrother/).

## SimpleX Chat — when metadata is the threat

**What it is:** an open-source messenger with no user identifiers at the
protocol level — no phone number, no username, not even a persistent ID
connecting your conversations to each other.

**Who it's for:** contacts between compartmentalized identities; people for
whom the *contact graph* — who talks to whom — is itself the sensitive
datum.

**Why:** the strongest metadata design in usable messaging: message queues
are unidirectional and per-contact, so the servers can't assemble a graph;
self-hostable relays; audited.[^sx]

**Drawbacks:** small network — you'll be inviting people, not finding them;
multi-device support and polish behind Signal; newer cryptographic and
operational track record; usability tradeoffs that are the direct price of
the metadata properties.

**Licensing:** open source (AGPL).

[^sx]: SimpleX, [security assessment by Trail of Bits](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) (2022), with subsequent audits linked from the same blog.

## The ones people already use

**WhatsApp** — content is genuinely E2EE (Signal protocol) and that matters;
Meta's collection of the contact graph, group memberships, and behavioral
metadata is the price. If it's where your family is: turn on encrypted
backups, and treat it as content-private, metadata-shared —
better than SMS, not a Signal substitute.

**iMessage** — solid E2EE between Apple devices *if* backups are handled:
without Advanced Data Protection, iCloud Backup gives Apple the keys to your
history. Falls back silently to carrier SMS/RCS with green-bubble contacts.

**Telegram** — **not recommended as a private messenger.** Default chats
and all groups are server-readable; E2EE requires manually starting a
"Secret Chat," which nobody does; the operator holds message content at
scale, whatever its moderation posture in any given year. Fine as a social
platform; wrong tool for confidentiality.

## Not recommended

Carrier **SMS/MMS** for anything sensitive (no encryption, full carrier
records), and boutique "military-grade encrypted" apps without published
protocols, audits, or a reason to exist — the graveyard of seized "secure
phone" companies (EncroChat, Sky ECC, and the FBI-run ANOM) is a reminder
that unverifiable privacy claims are worse than none.
