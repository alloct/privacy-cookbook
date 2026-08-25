---
title: What Is Privacy?
description: Privacy, security, and anonymity are three different properties. Knowing which one you need changes every decision that follows.
tags:
  - fundamentals
status: published
last_reviewed: 2026-08-24
---

People use "privacy" to mean at least three different things. Conflating them
leads to bad decisions, like using Tor to hide from an abusive partner who has
access to your unlocked phone.

## Privacy

Privacy is control over who sees your information and activity. A sealed
letter is private: the postal service knows who is writing to whom, but not
what was said. You can have privacy without anonymity. Your bank knows
exactly who you are, but your transactions should still be hidden from
everyone else.

## Security

Security is the ability of a system to resist unauthorized access. It is what
keeps an attacker from reading the data you decided to store. Security is a
prerequisite for privacy (an insecure messenger cannot be a private one) but
it is not the same thing. Google services are highly secure. They are not
private from Google.

## Anonymity

Anonymity is the separation between your activity and your real identity. A
whistleblower posting documents needs anonymity; whether the documents are
encrypted in transit matters less than whether the post can be traced back to
them. Anonymity is the hardest property to achieve and the easiest to destroy:
a single login from the wrong network, one reused username, one payment with a
linked card can collapse it permanently. The [Darwin Awards](/darwin-awards/)
section is largely a catalog of people learning this.

## Why the distinction matters

Each property calls for different tools and different behavior:

| You want | Example goal | Typical measures |
| --- | --- | --- |
| Privacy | Keep your medical searches out of ad profiles | Private browser settings, encrypted DNS, a trustworthy search engine |
| Security | Keep your accounts from being taken over | Password manager, [MFA](/accounts/multi-factor-authentication/), device updates |
| Anonymity | Publish something without it being attributed to you | [Tor](/network/tor/), strict [compartmentalization](/opsec/compartmentalization/), clean devices |

Most people reading this site need privacy and security. Few need anonymity,
and pursuing it half-heartedly is worse than not pursuing it at all, because
it produces false confidence. Decide which property you actually need using
[threat modeling](/start-here/threat-modeling/), then invest accordingly.
