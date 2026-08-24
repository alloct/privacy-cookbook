---
title: Passkeys
description: How passkeys work, why they resist phishing, and the ecosystem lock-in tradeoffs the marketing omits.
tags:
  - authentication
  - passkeys
status: published
last_reviewed: 2026-08-24
---

A passkey is a cryptographic credential that replaces the password entirely.
The site stores your public key; your device holds the private key and proves
possession of it when you sign in, gated by your screen lock or biometric.
The standard behind this is FIDO2/WebAuthn, the same foundation used by
hardware security keys.

## What passkeys fix

**Phishing.** The signature a passkey produces is bound to the website's real
origin. `paypa1-security.com` cannot request a credential registered to
`paypal.com` — the browser won't offer it. This removes the entire category
of attack that MFA codes only partially address.

**Server breaches.** The server holds a public key. A database dump contains
nothing to crack, stuff, or replay.

**Weak and reused secrets.** There is nothing to choose, remember, or reuse.

## What passkeys don't fix

- **Device and account custody becomes everything.** Whoever can unlock your
  device or your platform account can use your passkeys. A strong device
  passcode and a locked-down platform account are now load-bearing.
- **Recovery moves the problem.** If passkeys are gated by your Apple or
  Google account, the security of every passkey collapses to the security of
  that account's recovery flow.
- **They are not anonymous.** A passkey authenticates you to an account. It
  changes nothing about what the service learns while you're logged in.

## The lock-in question

Synced passkeys live in an ecosystem: iCloud Keychain, Google Password
Manager, or a third-party manager like Bitwarden or 1Password. Historically,
moving passkeys between ecosystems ranged from awkward to impossible; the
FIDO Alliance has published a credential-exchange specification intended to
fix this, and support is gradually appearing.[^fido] Until portability is
routine, the pragmatic hedge is to keep passkeys in a cross-platform password
manager rather than a device vendor's silo, or to register a passkey from
more than one ecosystem on accounts that matter.

[^fido]: FIDO Alliance, [Credential Exchange specifications](https://fidoalliance.org/specifications-credential-exchange-specifications/).

## Practical guidance

1. Adopt passkeys opportunistically: when a service you already use offers
   one, add it. Email and anything payment-capable first.
2. Keep a second way in — a hardware key, or TOTP plus backup codes — until
   you've tested the service's recovery story. Some services treat passkeys
   as MFA, others as full sign-in; the difference matters when a device dies.
3. If you use a password manager for passkeys, its master passphrase and MFA
   configuration are now protecting everything. Set them accordingly.
4. Registering a passkey does **not** disable the old password. The password
   remains a parallel door; keep it long, random, and stored — or remove it
   where the service allows.

## Passkeys or hardware keys?

Both are phishing-resistant WebAuthn. Hardware keys bind credentials to a
physical object that never leaves your control — better custody, worse
convenience, real cost. Synced passkeys trade some custody assurance for
zero-friction availability on all your devices. For most people, synced
passkeys on important accounts plus a pair of hardware keys on email and
finances is a sensible ceiling.
