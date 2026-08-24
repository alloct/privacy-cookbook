---
title: Backups
description: Backups are a security control. The 3-2-1 rule, ransomware-resistant design, and encrypting the copies as well as the originals.
tags:
  - backups
  - encryption
status: published
last_reviewed: 2026-08-24
---

Backups are usually filed under "IT chores," but they are a security control
of the first rank: they convert ransomware, theft, seizure, and hardware
death from catastrophes into inconveniences. An attacker who can destroy or
withhold your only copy of something owns you; an attacker who can't,
doesn't.

## The 3-2-1 baseline

Keep **3** copies of anything that matters, on **2** different kinds of
storage, with **1** copy off-site. A practical home version:

1. The live data on your computer or phone.
2. An automatic local backup — an external drive (macOS Time Machine,
   Windows File History, `restic`/`borg` on Linux) or a NAS.
3. An automatic off-site backup — an encrypted cloud backup service or a
   drive that physically lives somewhere else.

"Automatic" is the load-bearing word. Backup discipline that depends on
remembering is a countdown to the one month you didn't.

## Ransomware changes the design

Ransomware operators delete or encrypt every backup they can reach — mapped
drives, synced folders, connected cloud accounts. Two properties defend
against this:

- **Versioning:** the backup keeps historical snapshots, so an encrypted or
  corrupted file today doesn't overwrite last week's good copy. File sync
  (Dropbox, Drive) with limited version history is not a backup against an
  adversary who can purge versions from your logged-in account.
- **Offline or append-only copies:** a drive that is disconnected except
  during backups, or a backup target whose credentials permit writing new
  snapshots but not deleting old ones (offered by `restic`-compatible
  storage and the better backup services).

## Encrypt the backups

A backup is a complete copy of your data, so it deserves the same protection
as the original — an unencrypted external drive in a desk drawer quietly
bypasses the [disk encryption](/data/encryption/) on your laptop. Use
client-side encryption for cloud backups (the provider holds ciphertext),
and encrypt local backup drives (BitLocker, encrypted APFS, LUKS).

That creates the recovery-key problem: an encrypted backup whose key exists
only on the machine that just died is a very secure brick. Store backup
passphrases and recovery keys on paper with your important documents, and in
your password manager — noting that the manager's own recovery kit must
live on paper for the same circular reason.

## Phones

Phone backups are opt-in decisions about custody. iCloud Backup without
Advanced Data Protection leaves Apple holding recovery keys (including, in
practice, your message history — see
[Messaging](/communications/messaging/)); enabling ADP moves custody to you
along with the responsibility for the recovery code. Android's Google One
backups are encrypted with your screen-lock secret. Either way, know which
of your "encrypted" data has keys held by a provider, and decide on purpose.

## Test restores

An untested backup is a hope, not a plan. Twice a year: pull three files out
of each backup tier, including one old version, and confirm you can decrypt
without touching the original machine. Restore-testing is also when you find
out your off-site copy quietly stopped running in March.

## What to include

Beyond documents and photos: your password manager's export or recovery kit,
MFA backup codes, encryption recovery keys, and the configuration that would
take days to recreate. Then prune — backups are also a liability surface,
and data you no longer keep is data no backup can leak
([Data Minimization](/data/data-minimization/)).
