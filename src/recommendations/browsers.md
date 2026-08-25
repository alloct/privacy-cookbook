---
title: "Recommendations: Browsers"
description: Firefox, Brave, Mullvad Browser, and Tor Browser, which to use for which purpose, with configuration notes and drawbacks.
tags:
  - browsers
  - tools
  - recommendations
status: published
last_reviewed: 2026-08-24
---

Background: [Choosing a Browser](/browsing/browsers/) explains what actually
differs between browsers; [Browser Hardening](/browsing/browser-hardening/)
covers configuration. This page names picks.

Browsers are not interchangeable tools but different tools for different
jobs, so this page recommends by role rather than ranking one winner.

## Firefox: daily driver

**Who it's for:** most people, as the everyday browser for logged-in life.

**Why:** the only major independent engine left (Gecko), which matters for
both ecosystem health and distance from ad-company governance; Total Cookie
Protection isolates site data by default; full uBlock Origin support
(Manifest V2 extensions still work); deep configurability; Multi-Account
Containers for cheap [compartmentalization](/opsec/compartmentalization/).

**Setup that matters:** Enhanced Tracking Protection > Strict; HTTPS-Only
Mode on; telemetry off; uBlock Origin; a
[non-profiling search engine](/browsing/search-engines/).

**Drawbacks:** telemetry is on until you turn it off; Mozilla's
advertising-adjacent experiments require an occasional settings re-check;
sandboxing on Android trails Chromium-based browsers.

**Licensing:** open source (MPL).

## Brave: Chromium without the surveillance

**Who it's for:** people who need Chromium compatibility (some sites, some
enterprise tooling) or who want strong defaults with zero configuration;
also the strongest realistic pick on Android and iOS.

**Why:** tracker and ad blocking built into the engine (unaffected by
Manifest V3 extension limits); genuine
[fingerprinting randomization](/browsing/fingerprinting/); aggressive
default protections that survive updates.

**Setup that matters:** disable Rewards, Wallet, and news/sponsored content
in settings, five minutes of decluttering.

**Drawbacks:** the crypto features are noise for most users and erode trust
for some; still Chromium under the hood, so engine-level decisions
ultimately follow Google's roadmap.

**Licensing:** open source (MPL).

## Mullvad Browser: the private second browser

**Who it's for:** the not-logged-in browser in a
[two-browser split](/browsing/browsers/); people who want Tor Browser's
fingerprinting resistance at clearnet speeds, ideally paired with a
trustworthy [VPN](/network/vpns/).

**Why:** built by the Tor Project with Mullvad, shipping the crowd-strategy
fingerprint defenses, standardized metrics, private-by-default settings,
uBlock Origin preinstalled, without the Tor network's latency.

**Drawbacks:** no persistent logins by design (state clears on close);
some site breakage; a small user crowd compared to Tor Browser's, which
bounds how well "blending in" works; not a daily driver for logged-in life.

**Licensing:** open source.

## Tor Browser: for anonymity, not privacy

**Who it's for:** anyone whose [threat model](/start-here/threat-modeling/)
requires that visits not be attributable to them. See [Tor](/network/tor/).

**Why:** the only browser engineered end-to-end for anonymity, and the only
one whose fingerprint crowd is large enough to hide in.

**Drawbacks:** slow; breaks sites; logging in to personal accounts through
it defeats the point. Don't customize it. The defaults are the protection.

**Licensing:** open source.

## Not recommended as privacy tools

**Chrome.** Excellent security, but it is the collection endpoint of an
advertising company; the privacy ceiling is structural, not configurable.
**Edge.** Same conclusion, different company, plus aggressive
default-on telemetry and shopping features. **"Privacy" forks with tiny
teams.** A browser is among the most security-critical software you run;
it needs an organization behind it that ships patches within days, every
time, forever.
