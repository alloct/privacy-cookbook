---
title: Messaging
description: What end-to-end encryption guarantees, how the mainstream messengers differ, and the settings that matter after you pick one.
tags:
  - messaging
  - encryption
status: published
last_reviewed: 2026-08-24
---

End-to-end encryption (E2EE) means messages are encrypted on your device and
decrypted only on the recipient's; the service in the middle relays
ciphertext it cannot read. This is a mathematical property, not a policy
promise — done right, the provider *couldn't* hand over message contents even
under compulsion, because it never has them.

What E2EE does not cover: metadata (who, when, how often — see
[Communication Metadata](/communications/metadata/)), the endpoints
themselves (malware on a phone reads messages exactly like the owner does),
and whatever the person you're talking to screenshots or forwards.

## How the common messengers compare

| Messenger | E2EE | Metadata retained | Notes |
| --- | --- | --- | --- |
| Signal | Always, everything | Essentially none: account creation date and last-connection date, per its published subpoena responses[^signal] | Open source, nonprofit, the protocol everyone else borrows; requires a phone number to register, usernames hide it from contacts |
| WhatsApp | Always (Signal protocol) | Substantial: contact graph, groups, timing, device info, per its own privacy policy | Content is genuinely protected; the social graph belongs to Meta |
| Telegram | **Only** in one-to-one "Secret Chats" — regular chats and all groups are readable by the server | Extensive | Widely mistaken for an encrypted messenger; treat cloud chats as semi-public |
| iMessage | Yes, between Apple devices | Moderate | iCloud Backup without Advanced Data Protection stores message keys with Apple, quietly undoing E2EE for backed-up chats |
| SimpleX Chat | Always | Minimal by design; no user identifiers at the protocol level | Smaller ecosystem, rougher edges, strongest metadata story |
| SMS | None | Carrier keeps everything | Legacy fallback, not a messenger |

[^signal]: Signal, [Government requests and responses](https://signal.org/bigbrother/), which publishes the subpoenas it receives and the near-empty responses it is able to produce.

The pattern worth internalizing: **"has encryption" is not the question.**
The questions are *is it on by default for everything*, *who holds the keys
for backups*, and *what metadata does the operator accumulate*.

## Settings that matter after you choose

1. **Disappearing messages by default.** The chat log on your phone is the
   plaintext an attacker or a border agent actually gets. History that
   doesn't exist can't be extracted. A week or a month is livable.
2. **Check backup behavior.** On iMessage, enable Advanced Data Protection
   or exclude messages from iCloud Backup; on WhatsApp, turn on encrypted
   backups explicitly. Your E2EE is only as good as both ends' backups.
3. **Screen lock and registration lock.** A messenger is only as private as
   the unlocked phone it's on; a registration PIN stops number-hijacking
   from becoming account takeover.
4. **Verify safety numbers** for the handful of contacts where an
   impersonation or key-swap would genuinely matter.

## Getting people to switch

The hard part of messaging privacy is social, not technical. What works is
reducing friction, not lecturing: move one group chat, not a whole social
circle; pick the moment a platform has annoyed everyone; be the person who
answers fast on the new app. A messenger with slightly weaker properties that
your actual contacts use beats a perfect one where nobody is.

If your threat model is serious — source protection, targeted surveillance —
the calculus inverts: use the strongest tool (Signal, or SimpleX where phone
numbers are themselves a risk) and accept the social cost. Convenience
arguments are for threat models that can afford them.
