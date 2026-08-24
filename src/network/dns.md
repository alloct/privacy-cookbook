---
title: DNS
description: DNS queries reveal every domain you visit. Encrypted DNS fixes the eavesdropping, not the trust question.
tags:
  - dns
  - network
status: published
last_reviewed: 2026-08-24
---

Every time you visit a website, your device first asks a DNS resolver to
translate the domain name into an IP address. Traditionally those queries
travel unencrypted, which means whoever runs your network — and your ISP —
gets a complete, timestamped list of every domain you contact, even when all
your actual traffic is HTTPS.

## Encrypted DNS

DNS over HTTPS (DoH) and DNS over TLS (DoT) wrap queries in encryption so
network observers can't read or tamper with them. Modern browsers and
operating systems support one or both natively:

- **Browsers:** Firefox, Chrome, and Edge can enable DoH in settings and let
  you pick the provider.
- **Android:** Private DNS (DoT) accepts a provider hostname system-wide.
- **iOS/macOS:** configuration profiles or apps can install encrypted DNS
  system-wide.
- **Windows 11:** supports DoH for configured resolvers.

## What it does and doesn't hide

Encrypted DNS hides queries from the *network path*. It does not hide them
from the resolver you choose — you have moved the complete domain list from
your ISP to that provider. Pick one whose policies and business model you've
actually looked at:

| Resolver | Model | Notes |
| --- | --- | --- |
| Quad9 (9.9.9.9) | Nonprofit | Blocks known-malicious domains; Swiss-based |
| Mullvad DNS | Funded by VPN service | No-logging policy, optional ad/tracker blocking |
| Cloudflare (1.1.1.1) | Commercial | Fast; limited retention with published audit |
| NextDNS | Freemium | Configurable filtering; you create a profile, so consider what you link to it |
| Your ISP | Whatever your contract says | In some countries, legally free to sell the data |

A caveat that keeps this honest: even with encrypted DNS, the sites you visit
are often still visible to the network through the TLS handshake (the SNI
field) and the destination IP itself. Encrypted Client Hello (ECH) is closing
the SNI gap but isn't universal. Treat encrypted DNS as removing a gratuitous
leak, not as hiding your browsing — hiding browsing from the network is
[VPN](/network/vpns/) or [Tor](/network/tor/) territory.

## Filtering as a bonus

Because the resolver answers every lookup, it can decline to resolve ad and
tracker domains. Quad9 focuses on malware; Mullvad, NextDNS, and AdGuard DNS
offer tracker blocking. DNS filtering covers every app on the device, not
just the browser — useful on phones, where in-app trackers outnumber web
ones. It's cruder than [uBlock Origin](/browsing/browser-hardening/) (it
can't block a tracker served from a first-party domain) and complements
rather than replaces it.

## Setup priorities

1. **Phone first.** Android's Private DNS with `dns.quad9.net` or a Mullvad
   hostname takes one minute and covers all apps everywhere.
2. **Browser DoH on desktop**, or OS-level if your platform supports it
   cleanly.
3. **Router-level** DNS covers smart TVs and IoT devices, with the usual
   caveat that devices can hardcode their own resolvers; a firewall rule
   forcing port 53 through your resolver closes most of that.

If you use a [VPN](/network/vpns/), use its resolvers while connected —
sending DNS outside the tunnel recreates the leak the tunnel exists to close.
