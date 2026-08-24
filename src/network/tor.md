---
title: Tor
description: How onion routing distributes trust, what Tor Browser standardizes, and the user behaviors that break anonymity anyway.
tags:
  - tor
  - anonymity
  - network
status: published
last_reviewed: 2026-08-24
---

Tor routes your traffic through three volunteer-run relays. The entry relay
knows your IP but not your destination; the exit relay knows your destination
but not your IP; the middle relay separates the two. No single relay — and no
single relay *operator* — holds both halves. This is a structurally different
promise from a [VPN](/network/vpns/), which is one party holding everything
and pledging not to look.

## Tor Browser is half the system

Anonymous routing is useless if the browser identifies you anyway, so Tor
Browser standardizes what websites can measure — window dimensions, fonts,
time zone, APIs — to make users [look alike](/browsing/fingerprinting/)
rather than merely unlogged. Use Tor through Tor Browser (or an integration
like Tails or Whonix that inherits this work). Routing a normal browser
through the Tor network preserves your fingerprint and defeats the point.

Practical corollary: **don't customize Tor Browser.** No extensions, no
resizing the window, no preference tweaks. Every deviation moves you out of
the crowd, and the crowd is the protection.

## What Tor is for

- Reading and researching without the visit being attributable to you.
- Publishing or communicating where attribution is the threat.
- Reaching services blocked by your network or country (with bridges where
  Tor itself is blocked).
- Being one more ordinary user whose traffic makes the crowd bigger for the
  people whose lives depend on it.

## Honest limitations

- **Your ISP can see that you use Tor** (not what for). In some environments
  that alone draws attention — the correlation that identified the
  [Harvard bomb-threat sender](/darwin-awards/harvard-bomb-threat/) was
  exactly this. Bridges obscure Tor use where necessary.
- **Exit relays see plaintext for non-HTTPS traffic.** HTTPS handles this
  for nearly all modern sites; onion services avoid exits entirely.
- **A global adversary correlating both ends** remains Tor's acknowledged
  design limitation. For most threat models this is academic; for the most
  extreme ones it is not.
- **It's slower.** Three hops and volunteer bandwidth. Fine for browsing,
  bad for video calls.
- **Logging in as yourself ends the exercise.** Tor hides where a connection
  came from, not who typed their password into their own account.

## Behavior is the weak layer

Tor's engineering is excellent; the historical failures are almost all human.
Reusing a username from your real life, mentioning identifying details,
uploading a photo with [EXIF data](/data/file-metadata/), or connecting one
time without Tor — each has unmasked people whose network-layer anonymity was
flawless. The [Darwin Awards](/darwin-awards/) section is a museum of these.
Tor is a component of anonymity, not a synonym for it; the rest is
[compartmentalization](/opsec/compartmentalization/).

## VPN and Tor together?

Mostly no. VPN-over-Tor and Tor-over-VPN each reshuffle which party sees
what, usually adding a logging point rather than removing one. The two
defensible cases: a VPN can hide *the fact of Tor use* from a hostile local
network (bridges are the more targeted tool), and Tor Browser's own
documentation cautions against casual combinations.[^tordocs] If you can't
articulate precisely which adversary the combination defeats, use Tor alone.

[^tordocs]: Tor Project support documentation, [Can I use a VPN with Tor?](https://support.torproject.org/faq/faq-5/).
