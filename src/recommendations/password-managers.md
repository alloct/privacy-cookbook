---
title: "Recommendations: Password Managers"
description: Bitwarden, KeePassXC, and 1Password evaluated against public criteria — audits, encryption model, licensing, and honest drawbacks.
tags:
  - passwords
  - tools
  - recommendations
status: published
last_reviewed: 2026-08-24
---

Background on how these tools work and why you need one:
[Password Managers](/accounts/password-managers/) in the Accounts section.

## Criteria

To appear on this page, a password manager must have: client-side encryption
(the provider never holds usable keys or plaintext), at least one published
independent security audit, clients for all major platforms, working export,
and a funding model that explains its own existence. Open source is strongly
preferred.

## Bitwarden — default recommendation

**What it is:** a cloud-synced, open-source password manager with clients
for every platform and browser.

**Who it's for:** almost everyone; the best balance of security,
usability, and cost in the category.

**Why:** end-to-end encrypted vault with the architecture documented
publicly; open-source clients and server; repeated third-party audits with
reports published;[^bw] a genuinely usable free tier and a cheap paid one;
passkey storage; optional self-hosting (including the lighter Vaultwarden
ecosystem, which is community-maintained — a distinct trust decision).

**Drawbacks:** the interface is functional rather than polished; free tier
excludes TOTP storage; sync depends on Bitwarden's infrastructure unless you
self-host, and self-hosting shifts all operational security to you.

**Licensing:** clients GPLv3/source-available server; paid features exist.

[^bw]: Bitwarden, [Compliance, Audits, and Certifications](https://bitwarden.com/help/is-bitwarden-audited/), which links the published third-party audit reports.

## KeePassXC — local-file option

**What it is:** an open-source, offline password manager storing an
encrypted database file (`.kdbx`) you control entirely.

**Who it's for:** people whose threat model excludes third-party sync
services, or who want credentials with no account, no provider, and no
recurring anything.

**Why:** no server exists to breach or subpoena; the KDBX format is an open
de-facto standard with a large ecosystem (KeePassDX and Keepass2Android on
Android, Strongbox and KeePassium on iOS); audited;[^kpxc] browser extension
with autofill; TOTP support built in.

**Drawbacks:** sync between devices is your job (typically the database file
in a cloud folder — safe, since the file is encrypted, but a moving part) —
and so are backups: lose the file and the passphrase recovery is nobody.
Mobile requires pairing with a separate ecosystem app.

**Licensing:** GPLv2/GPLv3, community-maintained, no company behind it.

[^kpxc]: KeePassXC underwent an independent audit commissioned via Molly Rose Foundation/Cure53 in 2023; the report is linked from the [KeePassXC blog](https://keepassxc.org/blog/).

## 1Password — paid, polished

**What it is:** a commercial cloud password manager known for interface
quality and family/team features.

**Who it's for:** people (and especially households) who will pay for the
smoothest experience, and for whom usability determines whether the tool
gets used at all.

**Why:** strong documented security model — vault encryption combines your
password with a device-held Secret Key, so a weak master password alone
isn't enough to attack the ciphertext;[^1p] published audits; excellent
clients, autofill, passkey support, and travel-oriented features.

**Drawbacks:** closed source; subscription-only; no free tier; the Secret
Key improves breach resistance but adds a recovery item you must not lose.

**Licensing:** proprietary; subscription.

[^1p]: 1Password, [Security design white paper](https://support.1password.com/1password-security/).

## Notable non-recommendations

**Browser built-ins** (Chrome, Edge, Safari password saving) — better than
reuse, but weaker isolation from the browser, historically weaker local
protection, and vendor lock-in. **LastPass** — its 2022 breach exposed
customer vaults with significant fields unencrypted and revealed weak
legacy key-derivation defaults for older accounts;[^lp] the handling, more
than the breach itself, is disqualifying.

[^lp]: LastPass, [Notice of Security Incident](https://blog.lastpass.com/posts/notice-of-recent-security-incident) (December 2022), and subsequent reporting on the affected vault fields and iteration counts.
