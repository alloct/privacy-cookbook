---
title: OPSEC Fundamentals
description: The five-step OPSEC process, the principle that consistency beats intensity, and the failure patterns that actually unmask people.
tags:
  - opsec
  - fundamentals
status: published
last_reviewed: 2026-08-24
---

OPSEC (operations security) began as a US military process for keeping
adversaries from assembling sensitive conclusions out of individually
harmless details.[^purple] The formal version has five steps, and unlike
most military process, it translates to civilian life without loss:

1. **Identify critical information.** What, if known by the wrong party,
   causes the harm? (Your home address; the link between two identities;
   the fact that you're the leak.)
2. **Analyze the threat.** Who wants it, and what can they actually do?
   This is [threat modeling](/start-here/threat-modeling/).
3. **Analyze vulnerabilities.** Where does that information currently leak?
   Usernames, writing style, posting times, metadata, friends who tag you.
4. **Assess risk.** Likelihood × consequence, honestly. You cannot fix
   everything; fix what matters.
5. **Apply countermeasures.** Only now do tools enter the picture, chosen
   to close the leaks you found, not the leaks that are fashionable.

[^purple]: The process originated with the "Purple Dragon" study of US operations during the Vietnam War; see the [National Security Agency's declassified history](https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/purple-dragon/purple_dragon.pdf).

Most people do step 5 first and never do steps 1–4. That's how you get a VPN
subscription and a Telegram account "for privacy" while posting
timezone-revealing messages under a username you've had since high school.

## Consistency beats intensity

A single gap collapses the whole effort, and this is the defining, brutal
property of OPSEC. Signal for 99 conversations and SMS for the hundredth;
Tor every time except once from home; metadata stripped from every photo but
one. The [Sabu entry](/darwin-awards/sabu-lulzsec/) in our Darwin Awards is
the canonical example: an experienced operator, unmasked by logging into IRC
without Tor a single time.

The practical corollary: **choose a level of protection you can sustain
every single time**, rather than a heroic level you'll sustain until you're
tired, drunk, or in a hurry. A modest routine with no exceptions outperforms
a paranoid routine with monthly lapses.

## The failure patterns

Studied across real cases, deanonymization is boring. It's almost always one
of these:

- **Reuse.** A username, email, password, phone number, wallet, or server
  shared between the protected identity and an unprotected one
  ([the Ulbricht case](/darwin-awards/ross-ulbricht/)).
- **Content leaks.** Details in the text itself: hometown, weather,
  schedule, slang, skills, grievances. Individually harmless; aggregated,
  identifying.
- **Metadata.** [EXIF](/data/file-metadata/), timestamps mapping your
  timezone, [traffic patterns](/communications/metadata/).
- **The one lapse.** The single unprotected login, the VPN that dropped,
  the phone that came along to the meeting.
- **Other people.** The contact who got compromised, the friend who tagged
  you, the insider who talked. Your OPSEC includes everyone you rely on.

Countermeasures for the first four are covered across this site.
[Compartmentalization](/opsec/compartmentalization/) addresses reuse
directly. The fifth has no technical fix; it's governed by the oldest rule
in the discipline: information shared is information you no longer control.

## Calibrate, then relax

OPSEC thinking can tip into a paranoia that costs more than any adversary
ever will. The five-step process is also the antidote: it tells you what
*doesn't* matter, which is most things. Decide what's critical, protect it
without exceptions, and let the rest be normal life. Sustainable is the
whole game.
