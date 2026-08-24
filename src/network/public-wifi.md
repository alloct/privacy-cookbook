---
title: Public Wi-Fi
description: The coffee-shop hacker is mostly obsolete. What public networks actually expose in the HTTPS era, and the settings that matter.
tags:
  - wifi
  - network
status: published
last_reviewed: 2026-08-24
---

Public Wi-Fi advice is stuck in 2010. Back then, network neighbors could read
your email and hijack your sessions with off-the-shelf tools, because most
sites ran plain HTTP. Today HTTPS covers the overwhelming majority of web
traffic, and the classic coffee-shop attack reads mostly ciphertext.

The real exposures are narrower and worth stating precisely.

## What a hostile network sees today

- **Which sites you contact** — via [DNS](/network/dns/) queries, SNI in the
  TLS handshake, and destination IPs. Contents, no; destinations, yes.
- **Your device's MAC address**, historically usable to recognize the same
  device across visits and locations. Modern iOS, Android, and Windows
  default to per-network MAC randomization, which blunts this; verify it's
  on.
- **Captive-portal data** — whatever email or phone number you typed to get
  online, now attached to your device on that operator's records.
- **Unencrypted stragglers.** The odd legacy app, corporate tool, or IoT
  gadget still speaking plain HTTP is fully readable and modifiable.

An active attacker (a fake access point with the same name, or a compromised
router) can additionally attempt HTTPS downgrades and serve malicious captive
pages. Browsers have gotten hard to downgrade — HSTS and HTTPS-only mode
exist for exactly this — but "hard" isn't "impossible," and non-browser
traffic varies.

## Settings that matter

1. **HTTPS-only mode** in the browser (see
   [Browser Hardening](/browsing/browser-hardening/)). Never click through a
   certificate warning on a public network. That warning *is* the attack.
2. **MAC randomization on** (default on modern phones; confirm on laptops).
3. **Turn off auto-join for open networks.** Your device otherwise announces
   and joins remembered network names; a hostile AP can impersonate one.
   Periodically prune the remembered-networks list.
4. **Encrypted DNS** so the network doesn't get the free domain feed
   ([DNS](/network/dns/)).
5. **File sharing off / firewall on** — the "public network" profile your OS
   offers does this.
6. **Keep the system patched.** The realistic worst case on a hostile LAN is
   an exploit against an unpatched network stack, not a read of your
   banking session.

## Where a VPN fits

A [VPN](/network/vpns/) collapses the remaining exposures — visible
destinations, portal snooping, active-attack surface — into one encrypted
tunnel to a provider you chose in advance. On networks you have specific
reason to distrust (hotel networks abroad, conference Wi-Fi, anywhere you're
a plausible target), that's a clean win. On the average café network, it's a
modest improvement rather than a rescue: your phone's LTE hotspot is often
the simpler answer when something genuinely sensitive can't wait.

The summary nobody sells: public Wi-Fi in 2026 is mostly a *metadata* leak
and an *edge-case* attack surface. Fix the settings above once, and stop
rerouting your life around airport lounges.
