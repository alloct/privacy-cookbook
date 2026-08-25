---
title: Threat Modeling
description: A five-question method for deciding what to protect, from whom, and how much inconvenience it is worth.
tags:
  - fundamentals
  - threat-modeling
status: published
last_reviewed: 2026-08-24
---

A threat model is a short, honest answer to five questions. Without one, you
will copy someone else's precautions, usually someone with very different
problems, and end up inconvenienced in ways that don't protect you.

## The five questions

1. **What do I want to protect?** Assets: message contents, location, identity,
   financial data, files, the fact that two identities are the same person.
2. **Who do I want to protect it from?** Adversaries: advertisers and data
   brokers, criminals, an abusive ex-partner, an employer, a government.
3. **How likely is it that I will need to protect it?** A ransomware operator
   targeting everyone is likely; a nation-state targeting you specifically is
   (for most people) not.
4. **How bad are the consequences if I fail?** Annoyance, financial loss,
   unemployment, physical danger. Rank them.
5. **How much trouble am I willing to go through?** Be honest. A measure you
   abandon in three weeks protects nothing.

This framework is adapted from the Electronic Frontier Foundation's
[Surveillance Self-Defense](https://ssd.eff.org/module/your-security-plan)
security planning guide, which is worth reading in full.

## Adversaries are not interchangeable

The defenses that work against one adversary can be useless (or harmful) against another.

| Adversary | What works | What doesn't |
| --- | --- | --- |
| Ad networks, data brokers | Content blocking, [browser hygiene](/browsing/browser-hardening/), [data minimization](/data/data-minimization/) | A VPN alone; they identify you by login and fingerprint, not IP |
| Opportunistic criminals | [Password manager](/accounts/password-managers/), [MFA](/accounts/multi-factor-authentication/), updates, [backups](/data/backups/) | Exotic anonymity tools |
| Someone with access to your device | Device encryption, strong screen lock, separate accounts | Network-level tools; they're already past the network |
| Your ISP or network operator | [Encrypted DNS](/network/dns/), HTTPS, [VPN](/network/vpns/) or [Tor](/network/tor/) | Blocking cookies |
| A motivated government | Strict [compartmentalization](/opsec/compartmentalization/), Tor, minimal digital footprint, and honest assessment of whether technology helps at all | A consumer VPN and wishful thinking |

## Common failure modes

**Defending against the wrong adversary.** The classic example: meticulous
network anonymity while the real threat is a household member who knows your
unlock PIN.

**All-or-nothing thinking.** "Google already knows everything, so why bother"
ignores that future collection is preventable even when past collection is
not.

**Copying maximalists.** Advice written for investigative journalists in
hostile countries is not wrong, but applying it to a "keep my data away from
brokers" threat model produces burnout, and burnout produces zero privacy.

**Static models.** Threat models change with jobs, relationships, countries,
and laws. Reread yours when your life changes.

## Write it down

Actually write the answers down, a few sentences is enough. The rest of this
site constantly refers back to threat models, because almost every
recommendation is conditional on one. When a guide here says "if your
adversary is X," that is your cue to check the notes you made today.
