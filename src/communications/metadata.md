---
title: Communication Metadata
description: Who you talked to, when, and how often — why the envelope is often worth more than the letter, and what actually reduces it.
tags:
  - metadata
  - messaging
status: published
last_reviewed: 2026-08-24
---

Metadata is everything about a communication except its content: who
contacted whom, when, from where, how often, for how long. Encryption
protects the letter; metadata is the envelope, and envelopes are collected in
bulk precisely because they don't require breaking any encryption.

Former NSA and CIA director Michael Hayden put it plainly: "We kill people
based on metadata."[^hayden] The point of quoting that is not drama — it's
that the people best positioned to compare content and metadata consider
metadata the more operational of the two.

[^hayden]: Michael Hayden, remarks at the Johns Hopkins Foreign Affairs Symposium, April 2014. Widely reported; see e.g. [The New York Review of Books, "We Kill People Based on Metadata"](https://www.nybooks.com/online/2014/05/10/we-kill-people-based-metadata/).

## What metadata reveals

A week of call records with no audio reveals: your doctor (and, by the
specialist's name, roughly why), a 2 a.m. call to a crisis line, daily calls
to one number that stop abruptly, which colleagues you talk to outside work
hours. Aggregated, the contact graph reconstructs your social network,
routines, and relationships with a fidelity content rarely adds much to.
Every hop in the graph implicates other people — collecting *your* metadata
maps *their* lives too.

## Where it accumulates

- **Carriers:** every call, SMS, and data session, tied to a tower location,
  retained under whatever your jurisdiction's rules are.
- **Messaging providers:** varies enormously — the comparison table in
  [Messaging](/communications/messaging/) is mostly a metadata table.
- **Email providers:** full correspondence graphs going back years; PGP
  encrypts the body while headers stay readable.
- **Networks:** [DNS and SNI](/network/dns/) leak which services you use
  even when traffic is encrypted.

## Reducing it

Ranked by effect:

1. **Choose services that can't retain what they don't collect.** Signal's
   subpoena responses demonstrate near-zero retention; SimpleX avoids user
   identifiers at the protocol level. A provider's privacy is best measured
   by what it can produce under legal compulsion.
2. **Move conversations off carrier channels.** Calls and SMS generate
   carrier records by design; the same conversation inside an E2EE messenger
   generates, at most, encrypted-traffic timing.
3. **Shrink the retained history.** Disappearing messages limit not just
   content exposure but the reconstructable record on both ends.
4. **Separate contexts.** Metadata links identities: one account that talks
   to both your family and your activist group joins the two graphs. This is
   the [compartmentalization](/opsec/compartmentalization/) problem in its
   purest form.
5. **Network-layer cover** ([VPN](/network/vpns/), [Tor](/network/tor/))
   hides *which services* you touch from network observers — one metadata
   layer among several, not a solution to the provider-side layers above it.

## The honest ceiling

You cannot zero this out. Timing, message sizes, and traffic patterns leak
information even from the best systems, and academic traffic-analysis
literature keeps demonstrating new inferences from less. The achievable goal
is a large reduction: pick low-retention tools for the conversations that
matter, keep separate lives separate, and don't generate carrier records for
things that could have been a Signal message.
