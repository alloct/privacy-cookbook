---
title: VPNs
description: What a VPN actually changes, what it can't, and how to evaluate a provider in a market built on overclaiming.
tags:
  - vpn
  - network
status: published
last_reviewed: 2026-08-24
---

A VPN encrypts your traffic between your device and the provider's server,
then forwards it to its destination. Two things change: your local network
and ISP see only an encrypted tunnel, and websites see the VPN server's IP
address instead of yours.

That is the entire product. Everything else in VPN marketing is elaboration
or fiction.

## What a VPN does

- **Hides traffic destinations from your ISP and local network.** Your ISP
  sees you connected to a VPN server, not which sites you visit. (Page
  *contents* were already protected by HTTPS on almost all sites.)
- **Hides your IP address from services you connect to.** Sites see the exit
  server's IP, shared with other customers.
- **Moves your apparent location**, which changes regional behavior of
  services.
- **Defeats IP-based logging** by sites, forums, and the people who subpoena
  or breach them later.

## What a VPN does not do

- **It does not make you anonymous.** You are logged in to accounts,
  fingerprintable (see [Fingerprinting](/browsing/fingerprinting/)), and
  fully visible to the VPN provider itself.
- **It does not "secure" you against malware, phishing, or breaches.**
  Different problems entirely.
- **It does not hide from the sites you use.** Google knows who you are
  because you're signed in to Google, VPN or not.
- **It cannot beat an adversary who can watch both ends.** Traffic
  correlation is outside a VPN's threat model; that's [Tor](/network/tor/)
  territory, with caveats even there.

The honest one-sentence summary: **a VPN moves trust from your ISP to your
VPN provider.** Whether that's an upgrade depends entirely on the two
parties. In countries where ISPs legally sell browsing data, it usually is.
On a network you distrust more than usual, it clearly is. If the VPN company
is an anonymous entity with a free product and aggressive YouTube
sponsorships, it emphatically is not: free VPNs have been caught logging and
selling exactly the data they promised to protect.

## Evaluating a provider

- **No-logging claims tested in the real world.** The strongest evidence is
  a server seizure or subpoena that produced nothing, or repeated independent
  audits of the no-logging infrastructure. Marketing pages don't count.
- **Jurisdiction and ownership you can name.** Shell-company VPNs and brands
  quietly owned by ad-tech firms are disqualifying.
- **Modern protocols** (WireGuard, or OpenVPN) with open-source clients.
- **Anonymous payment accepted** (cash, Monero) if unlinkability from your
  identity matters to your threat model.
- **Diskless/RAM-only servers** and minimal account data at signup.
- **A kill switch** that blocks traffic when the tunnel drops, so a
  disconnection doesn't silently expose your real IP — the exact failure in
  our [Guccifer 2.0 Darwin Award](/darwin-awards/guccifer-2/).

## Do you need one?

If your concern is your ISP or local network learning your browsing habits:
yes, a reputable paid VPN helps directly. If your concern is advertising
surveillance: browser and account hygiene matter far more — trackers
identify you above the network layer. If your concern is anonymity from a
capable adversary: a VPN is insufficient by design; read
[Tor](/network/tor/) and [Compartmentalization](/opsec/compartmentalization/)
instead.
