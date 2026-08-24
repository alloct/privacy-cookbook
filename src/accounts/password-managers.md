---
title: Password Managers
description: How password managers work, how to evaluate one, and how to migrate without losing your mind.
tags:
  - passwords
  - authentication
  - tools
status: published
last_reviewed: 2026-08-24
---

A password manager is an encrypted database of credentials unlocked by one
strong master passphrase. It is the highest-value security tool available to
a normal person, because it makes unique passwords — the thing that actually
prevents most account takeovers — effortless instead of impossible.

## The trust question

"Isn't putting everything in one place dangerous?" It concentrates risk, yes.
But the alternative isn't a hundred strong memorized passwords; it's reuse.
The realistic comparison is:

- **With a manager:** one high-value target, protected by strong local
  encryption and a passphrase only you know.
- **Without:** dozens of low-value targets, each a copy of the same password,
  protected by whichever breached website had the worst security.

Serious managers encrypt the vault locally before anything is synced, so the
provider stores only ciphertext (often called zero-knowledge architecture).
Verify the claim: reputable products publish security whitepapers and
independent audit reports. If a product has neither, pass.

## What to look for

| Property | Why it matters |
| --- | --- |
| Client-side (end-to-end) encryption | The sync provider must never hold your master key or plaintext |
| Public security audits | Independent verification beats marketing claims |
| Open source (preferred) | Auditable by people who don't work for the vendor |
| Cross-platform + browser extension | If it isn't everywhere you type passwords, you'll bypass it |
| Password generator | Random 20+ character passwords on demand |
| Breach checking | Flags stored credentials that appear in public breach data |
| Export | Your data must not be hostage to the vendor |
| Sustainable funding | Free products with server costs need explaining |

Autofill from a browser-integrated manager also resists phishing: the
extension fills credentials only on the domain they were saved for, so a
lookalike domain gets nothing — a protection your eyes don't reliably provide.

## Cloud sync or local file?

**Cloud-synced managers** (Bitwarden, 1Password, Proton Pass) handle sync and
recovery for you. The provider sees encrypted blobs plus account metadata
(email, IP, timestamps). Right choice for most people.

**Local-file managers** (KeePassXC and the KeePass ecosystem) keep the vault
as a file you control. No provider, no account metadata — and no help when
you lose the file. Sync between devices is your problem. Right choice if
your threat model rules out third-party involvement and you have backup
discipline.

Browser built-in managers are better than reuse, but they inherit the
browser's attack surface, historically weaker local protection, and lock you
into one vendor's ecosystem. A dedicated manager is worth the small setup
cost. See our [specific recommendations](/recommendations/password-managers/).

## Doing the migration

1. Install the manager and its browser extension.
2. Choose a master passphrase: five to seven random diceware words (see
   [Passwords](/accounts/passwords/)). Write it on paper and store it
   somewhere physically secure until it's memorized. This is the one password
   you can never reset.
3. Save credentials as you log in to things — don't try to migrate everything
   in one sitting.
4. When the vault has accumulated your real accounts, spend an hour replacing
   the reused passwords, starting with email, banking, and anything holding
   payment methods.
5. Set up the manager's emergency access or print a recovery kit, and store
   it with your important documents. Test a restore once.

::: warning
If the vault is protected by a weak master passphrase, everything above is
theater. The master passphrase is the one place where effort is mandatory.
:::
