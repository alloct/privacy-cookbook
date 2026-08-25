---
title: Multi-Factor Authentication
description: Not all second factors are equal. SMS, authenticator apps, and hardware keys ranked by what they actually stop.
tags:
  - authentication
  - mfa
status: published
last_reviewed: 2026-08-24
---

Multi-factor authentication (MFA) requires something beyond the password, typically something you have. It turns "attacker knows your password" from
game over into a non-event. But MFA methods differ enormously in what they
stop, and the weakest common method can be actively dangerous to rely on.

## The methods, ranked

**1. Hardware security keys (FIDO2/WebAuthn): strongest.** A physical device
(YubiKey, Nitrokey, and similar) performs a cryptographic challenge that is
bound to the website's real origin. A phishing site on a lookalike domain
receives nothing usable, which makes this the only common method that stops
real-time phishing outright rather than depending on your alertness. Buy two;
register both; keep the spare somewhere safe.

**2. Platform passkeys: same cryptography, different storage.** Passkeys use
the same origin-bound protocol with keys held on your phone or synced through
your platform account. Phishing-resistant like hardware keys, with different
custody tradeoffs, covered separately in [Passkeys](/accounts/passkeys/).

**3. Authenticator apps (TOTP): good.** Apps like Aegis, Tofu, or Ente Auth
generate six-digit codes from a shared secret. Nothing travels over the phone
network, so SIM-based attacks are irrelevant. The weakness: a convincing
phishing page can ask for the current code and replay it within its ~30-second
window. TOTP stops password-only attacks cold, but it does not stop
live phishing.

**4. Push notifications: mixed.** Tapping "Approve" is convenient and
resists code-relay phishing slightly better, but enables *MFA fatigue*
attacks: an attacker with your password sends approval requests until you tap
yes at 2 a.m. to make it stop. This technique featured in the 2022 Uber
breach. Number-matching variants mitigate it. Never approve a request you
didn't initiate. That prompt *is* the attack, and it means your password is
already gone.

**5. SMS and voice codes: last resort.** Codes sent by text are vulnerable
to SIM swapping: an attacker convinces or bribes a carrier employee to move
your number to their SIM, then receives your codes and your password resets.
This is a routine, well-documented crime, not a theoretical one.[^fbi] SMS
MFA still beats nothing, but treat it as a stopgap, and remove your phone
number as a recovery method wherever a better option exists.

[^fbi]: FBI Internet Crime Complaint Center, [Criminals Increasing SIM Swap Schemes to Steal Millions of Dollars from US Public](https://www.ic3.gov/PSA/2022/PSA220208) (2022).

## Where to enable it first

Priority order: **email** (it resets everything else), password manager,
banking and payment services, cloud storage, social accounts with your name
on them. Email MFA is the single highest-value switch you can flip.

## Backup codes

Every service that offers MFA offers one-time backup codes. Save them in your
password manager, or print them, if the vault itself is what the codes
recover. Skipping this step converts "lost phone" into "lost account";
account-recovery support queues are where MFA's security either survives or
quietly dies, as covered in [Account Recovery](/accounts/account-recovery/).

## Privacy note

MFA is a security control, not a privacy one. Giving a service your phone
number for SMS codes hands it a durable identifier used for cross-service
tracking. One more reason to prefer TOTP apps and hardware keys: they tell
the service nothing about you.
