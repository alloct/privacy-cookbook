---
title: Account Recovery
description: Recovery flows are the back door to every account. Audit them like an attacker would.
tags:
  - authentication
  - recovery
status: published
last_reviewed: 2026-08-24
---

Attackers rarely fight their way through a strong front door when the side
entrance is propped open. Recovery flows. "forgot password," security
questions, SMS resets, support tickets, authenticate people who *can't*
prove who they are, which makes them structurally the weakest point of any
account. Your security is the security of your weakest enabled recovery path.

## Audit the paths that exist

For each account that matters, open its security settings and list every way
in: passwords, passkeys, MFA methods, recovery email, recovery phone, backup
codes, trusted devices, linked "Sign in with" identities. Two questions per
path:

1. Could someone who is not me satisfy this path? (Old phone number? Email
   account you barely secure? Guessable security answers?)
2. If I lost everything in my pocket today, could *I* still satisfy one?

The goal is no path an attacker can use and at least one path you can.

## The usual weak links

**Recovery phone numbers.** SIM swapping turns "text me a reset code" into
full takeover, and it happens to ordinary people, not just executives (see
[MFA](/accounts/multi-factor-authentication/)). Remove your phone number as a
recovery method anywhere a better option exists. If a service insists on a
number, some carriers offer port-out PINs, set one.

**Stale recovery email.** A recovery address you stopped checking, or worse,
an expired domain or a recycled university address, is a standing invitation.
Recovery chains should terminate at your most-secured account, not your
least.

**Security questions.** Genealogy sites and old social posts answer most of
them. Where forced, store random strings as answers in your password manager
(see [Passwords](/accounts/passwords/)).

**Human support.** Attackers phone support desks with your name, birthday,
and the last four digits of a card (all breach-available) and talk their way
in. You mostly can't control this, but you can avoid scattering those
identifiers (see [Data Minimization](/data/data-minimization/)) and prefer
services whose recovery policy is "no backup codes, no account."

## Build your own recovery plan

Strong authentication without a recovery plan just means you get locked out
instead of the attacker. Prepare, on paper or other offline storage, kept
somewhere physically secure:

- Password manager **emergency kit**: master passphrase and recovery codes.
- **Backup codes** for your primary email and any account where losing access
  is unacceptable.
- A **second hardware key** registered everywhere the first one is.
- If you use encrypted services with no provider reset (Proton, Tuta,
  encrypted backups): those recovery phrases, clearly labeled.

Test the plan once: pretend your phone is gone and walk through regaining
email access using only the kit. Ten minutes now versus a support-ticket
purgatory later.

## For the highest-stakes accounts

Some providers offer hardened modes. Google's Advanced Protection Program,
for example, requires hardware keys and deliberately makes recovery slow and
difficult. That tradeoff is the point: convenient recovery for you is
convenient recovery for an impersonator. Choose which side of that tradeoff
each account belongs on, deliberately.
