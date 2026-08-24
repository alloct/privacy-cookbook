---
title: Choosing a Browser
description: The realistic browser options for privacy, what each one protects against, and why "private mode" isn't.
tags:
  - browsers
  - tracking
status: published
last_reviewed: 2026-08-24
---

The browser decides what websites can learn about you by default. Choosing a
privacy-respecting one gets you more than any list of extensions bolted onto
a browser that works against you.

## What actually differs between browsers

- **Default tracking protection.** Whether third-party cookies, known
  trackers, and cross-site storage are blocked out of the box.
- **Telemetry.** What the browser reports to its vendor, and whether you can
  turn it off.
- **Business model.** A browser funded by advertising has a structural
  conflict of interest with your privacy. This is not name-calling; it
  predicts default settings accurately.
- **Fingerprinting posture.** Whether the browser tries to make you look like
  other users or happily exposes every detail of your hardware. See
  [Fingerprinting](/browsing/fingerprinting/).

## The realistic options

**Firefox** — independent engine (Gecko), strong tracking protection
(Enhanced Tracking Protection with Total Cookie Protection isolates cookies
per site), deeply configurable. Some telemetry on by default, all of it
switchable. The base for further [hardening](/browsing/browser-hardening/).

**Brave** — Chromium engine with aggressive built-in blocking and meaningful
fingerprinting defenses. Ships crypto/rewards features many users disable
first thing, but the privacy engineering underneath is real.

**Mullvad Browser** — the Tor Browser's anti-fingerprinting work, without the
Tor network, designed to be paired with a VPN. Strongest fingerprint
resistance outside Tor Browser at the cost of some site breakage and
convenience.

**Tor Browser** — the only browser designed for anonymity rather than
privacy. Different tool for a different job; see [Tor](/network/tor/).

**Safari** — solid tracking protection and sandboxing, reasonable choice if
you're staying in Apple's ecosystem, limited extension and configuration
depth.

**Chrome and Edge** — technically excellent security engineering; the privacy
posture is what you'd expect from companies whose revenue depends on knowing
what you do. Fine against malware, not built to be private from their
vendors.

Concrete picks with reasoning are in
[Recommendations → Browsers](/recommendations/browsers/).

## Private mode does not do what people think

Private/incognito windows delete *local* history, cookies, and site data when
the window closes. That's all. Websites still see your IP address, your ISP
still sees your traffic, your employer's network still logs the connection,
and you can still be fingerprinted. Private mode protects you from people who
share your computer — a legitimate use — not from the network or the sites
you visit.

## One browser is a profile; two are a boundary

Whatever you choose, consider a two-browser split: one browser for the
accounts that know your name (email, banking, shopping), another with
stricter settings for general browsing. Cross-site tracking works by linking
your logged-in identity to your browsing; separating them at the browser
level cuts that link far more reliably than cookie settings. This is
[compartmentalization](/opsec/compartmentalization/) in its cheapest form.
