---
title: Browser Hardening
description: Settings and one extension that remove most tracking, and the hardening steps that cause more breakage than they're worth.
tags:
  - browsers
  - tracking
  - hardening
status: published
last_reviewed: 2026-08-24
---

Hardening means changing settings and adding *at most* a couple of carefully
chosen extensions. More is not better: every extension is code with access to
your browsing, and an unusual pile of them makes your browser more
[fingerprintable](/browsing/fingerprinting/), not less.

## The settings that matter (any browser)

- **Turn off telemetry / "help improve" options.** Usually under Privacy
  settings.
- **Disable search and URL-bar suggestions from the network.** Otherwise
  every keystroke in the address bar is sent to your search provider as you
  type.
- **Set the default search engine** to one that doesn't profile you, see
  [Search Engines](/browsing/search-engines/).
- **Block third-party cookies** if the browser doesn't already isolate them.
  Firefox's Total Cookie Protection and Brave's defaults handle this.
- **Turn off password saving** in the browser if you use a
  [password manager](/accounts/password-managers/), one credential store,
  not two.
- **Review "enhanced" features** that phone home: shopping assistants,
  sponsored new-tab tiles, cloud-sync of history. Off unless you need them.
- **HTTPS-only mode.** Every mainstream browser has it now; it should be on.

## Firefox specifics

Firefox's `about:config` allows deep changes, but start with the visible
settings: set Enhanced Tracking Protection to **Strict**, enable HTTPS-Only
Mode, and disable telemetry under Settings > Privacy & Security. Strict mode
breaks few sites in practice, and the shield icon lets you relax it per-site.

If you want a maintained, opinionated preference set beyond that, the
Arkenfox user.js project documents every override it makes, read what it
changes rather than pasting configs from forum posts.[^arkenfox]

[^arkenfox]: [Arkenfox user.js](https://github.com/arkenfox/user.js), a documented Firefox hardening template.

## The one extension

**uBlock Origin** blocks trackers and ads via filter lists, runs locally, is
open source, and has earned more trust than any other extension in this
space. On Chromium-based browsers, use uBlock Origin Lite (Manifest V3
limits the full version there); on Firefox, the full version works. Default
filter lists are fine, piling on extra lists yields diminishing returns and
occasional breakage.

Skip the rest of the "privacy extension" category. Anti-fingerprinting
add-ons routinely make you *more* distinctive, and functionality overlapping
uBlock adds attack surface without adding protection.

## Worth doing selectively

- **Container/profile separation.** Firefox Multi-Account Containers, or
  separate browser profiles, isolate logged-in identities from general
  browsing. Highest-value "advanced" step; see
  [Choosing a Browser](/browsing/browsers/) for the two-browser version.
- **Disabling JavaScript per-site** (via uBlock's advanced mode or NoScript)
  is powerful and high-maintenance. Reserve it for a hardened secondary
  browser rather than your daily driver.

## Not worth it for most people

- **Spoofing your user agent.** Contradictions between the claimed and actual
  browser make you more fingerprintable.
- **Disabling WebRTC, canvas, WebGL globally** via random extensions, breakage plus distinctiveness. If your threat model justifies this, use
  [Mullvad Browser or Tor Browser](/browsing/fingerprinting/), which do it
  coherently for a whole crowd of users.
- **VPN browser extensions.** These are proxies for browser traffic only,
  and frequently belong to businesses whose product is your data. If you need
  a VPN, use a real one, see [VPNs](/network/vpns/).

## Maintenance

Hardening is a one-time hour plus a five-minute quarterly review: update the
browser, prune extensions you stopped needing, and re-check that an update
didn't quietly re-enable telemetry or "personalization" features.
