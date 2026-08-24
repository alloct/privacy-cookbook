---
title: Fingerprinting
description: How websites identify you without cookies, why blocking it is hard, and the strategies that actually reduce it.
tags:
  - browsers
  - tracking
  - fingerprinting
status: published
last_reviewed: 2026-08-24
---

Browser fingerprinting identifies you by measuring your browser rather than
storing anything in it. Delete every cookie you like — if your browser's
combination of measurable properties is unique, you can be recognized on the
next visit anyway.

## How it works

Scripts can read or infer, among other things: screen resolution and color
depth, time zone, language list, installed fonts, GPU model (via WebGL),
audio-processing quirks, how your specific hardware renders text onto a
canvas element, touch support, and the browser version itself. No single
property identifies you. The *combination* frequently does — the EFF's Cover
Your Tracks project demonstrates this live against your own browser and
reports how many bits of identifying information each property
leaks.[^cyt]

[^cyt]: Electronic Frontier Foundation, [Cover Your Tracks](https://coveryourtracks.eff.org/).

Fingerprinting is invisible: nothing is stored on your machine, there is
nothing to delete, and no permission prompt appears. It survives private
mode, cookie clearing, and VPNs — a VPN changes your IP, not your GPU.

## The counterintuitive part

You cannot fight fingerprinting by customizing your browser to be "more
private" one tweak at a time. Each unusual setting — a spoofed user agent, a
disabled API, a rare extension leaking its presence — makes your fingerprint
*more* distinctive. Fingerprinting resistance is a crowd property: you are
protected when your browser is indistinguishable from many other people's,
which is precisely what casual tweaking destroys.

There are two coherent strategies:

**Blend into a crowd (strongest).** Tor Browser and Mullvad Browser make
every user present nearly identical values: standardized window sizes, fonts,
time zone handling, and blocked or normalized APIs. Your fingerprint matches
thousands of other users, so it identifies nobody. The cost is breakage and
inconvenience — a price worth paying when the
[threat model](/start-here/threat-modeling/) calls for it.

**Reduce and randomize (pragmatic).** Firefox's fingerprinting protections
and Brave's "farbling" add small randomizations to canvas, audio, and similar
readouts so each session measures differently. This defeats a good share of
commercial fingerprinting without much breakage. It does not defeat a
determined adversary and isn't designed to.

For most people: use a browser with built-in fingerprinting defenses (Brave,
Firefox with strict protections), block the tracking scripts outright with
uBlock Origin — a fingerprinting script that never loads learns nothing — and
resist the urge to install five anti-fingerprinting extensions. For
anonymity-grade needs, only the crowd strategy is credible.

## A note on "fingerprint testers"

Sites that grade your fingerprint (including Cover Your Tracks) measure
uniqueness *within their visitor population*, which skews heavily toward
privacy enthusiasts. A "unique" score there is informative, not a verdict.
Use them to understand which properties leak, not as a pass/fail exam.

## Where this fits

Fingerprinting is one linkage channel among several. If you log in to a site,
the fingerprint is moot — you identified yourself. The realistic goals are:
deny cheap cross-site tracking (achievable with the pragmatic strategy), or
deny linkage between separated identities (requires the crowd strategy plus
the discipline described in
[Compartmentalization](/opsec/compartmentalization/)).
