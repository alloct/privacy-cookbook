---
title: Social Engineering
description: Attacks aimed at people instead of systems, pretexting, phishing, and the verification habits that defeat them.
tags:
  - opsec
  - social-engineering
  - phishing
status: published
last_reviewed: 2026-08-24
---

Social engineering is hacking the person instead of the machine: convincing
you to open the door rather than picking the lock. It works because it
exploits reflexes that are correct in normal life, helpfulness, deference to
authority, urgency response, and because it scales. Verizon's annual breach
report has for years attributed a substantial share of breaches to the human
element rather than technical exploitation.[^dbir]

[^dbir]: Verizon, [Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/), published annually.

## The mechanics

Nearly every social-engineering attack combines three ingredients:

- **A pretext.** A plausible identity and story: IT support, your bank's
  fraud department, a courier, a recruiter, a colleague on a deadline. Good
  pretexts are built from your own public information (LinkedIn role,
  breached data, social posts), which is one more argument for
  [data minimization](/data/data-minimization/).
- **An emotion.** Urgency, fear, authority, curiosity, or greed, deployed
  to bypass deliberation. "Your account will be closed." "This is the fraud
  department; we need to act now." "HR complaint attached."
- **An ask.** Click this, read me the code, install this remote-access
  tool, buy gift cards, wire the payment, let me through the door.

The technical delivery varies, email phishing, SMS ("smishing"), voice
calls with cloned or convincing voices, QR codes, fake login pages, but the
skeleton doesn't.

## The defenses that work

**Verify out-of-band, always.** The single habit that defeats most of this:
never authenticate a contact through the channel it arrived on. Bank calls
you? Hang up, call the number on your card. Email from your boss asks for a
payment? Message them on the channel you already use. IT needs your code?
IT doesn't need your code, real support never asks for MFA codes or
passwords, full stop.

**Let urgency raise suspicion, not compliance.** Legitimate institutions
almost never require irreversible action in minutes. The pressure to act
*now* is the most reliable tell in the entire genre, treat manufactured
urgency as the attack itself.

**Make the technology absorb what it can.** A
[password manager](/accounts/password-managers/) refuses to autofill a
lookalike domain; [phishing-resistant MFA](/accounts/passkeys/) produces
nothing a fake page can use; call-screening quietly deletes the problem.
Every attack the tooling eats is one that never reaches the human.

**Shrink the pretext material.** The attacker's script is assembled from
what's findable about you: role, colleagues, vendors, travel, breach data.
You can't zero it, but the difference between a generic phish and a
convincing spear-phish is exactly the information you've
[left lying around](/data/data-minimization/).

## If you got got

Speed matters more than composure. Change the exposed password (and
[everywhere it was reused](/accounts/passwords/)), revoke active sessions,
notify the bank while transactions are still reversible, warn the contacts
whose names are now in the attacker's hands, and (in organizations) report
immediately. The shame reflex that delays reporting is part of the attack's
design; institutions that punish reporting train their people to hide
compromises, which is strictly worse. Everyone is susceptible to a
well-timed, well-researched approach; the defense is habits, not
intelligence.
