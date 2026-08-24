---
title: Encryption
description: Full-disk encryption on every platform, what it protects against, and the file-level tools for everything that leaves the disk.
tags:
  - encryption
  - devices
status: published
last_reviewed: 2026-08-24
---

Encryption at rest answers one question: if someone gets your hardware — a
stolen laptop, a lost phone, a seized drive, a resold "wiped" disk — do they
get your data? Without it, the answer is yes regardless of your login
password, because a disk can simply be read in another machine.

## Full-disk encryption per platform

- **iPhone/iPad and modern Android:** encrypted by default, keys protected
  by dedicated hardware. Your passcode strength is the effective security —
  see the caveat below.
- **Windows:** BitLocker on Pro/Enterprise editions; Windows Home offers
  the more limited "Device encryption" on supported hardware. Check
  Settings → Privacy & Security → Device encryption. Note that default
  setups may escrow the recovery key to your Microsoft account —
  convenient, and a custody decision you should make deliberately.
- **macOS:** FileVault, one switch in System Settings, on by default on
  recent versions with Apple Silicon.
- **Linux:** LUKS, offered as a checkbox by every major installer at
  install time. Enabling it later effectively means reinstalling.

Turn it on today. The performance cost on modern hardware is negligible; the
only real obligation it creates is **storing the recovery key** somewhere
that isn't the encrypted device — printed with your documents, or in your
[password manager](/accounts/password-managers/).

## What it protects, precisely

Full-disk encryption protects **data at rest on powered-off (or
first-unlock) devices**. It does not protect a running, unlocked machine —
malware and rubber-hose access read encrypted disks exactly as well as you
can. Complementary boundaries: a strong screen lock and short auto-lock
timeout (a lock screen on a running device is an OS access control, weaker
than cold-boot encryption), and shutting laptops fully down for border
crossings and other high-risk transits rather than sleeping them.

On phones, security increases substantially after every reboot until first
unlock ("BFU" state, where keys aren't yet in memory) — powering a phone
off before surrendering it is a meaningful act, not superstition.

::: note
The passcode is the weak point. Disk encryption with a 4-digit PIN resists
your roommate, not a forensics lab with extraction hardware. Hardware
rate-limiting (Secure Enclave, StrongBox, TPM+PIN) closes much of this gap;
a 6+ digit or alphanumeric code closes more of it.
:::

## File- and volume-level encryption

Disk encryption stops mattering the moment data leaves the disk. For files
that travel — cloud uploads, USB sticks, email attachments, archives:

- **Cryptomator** — encrypts files client-side before cloud sync; designed
  exactly for the "I use Dropbox/Drive but don't want them reading it" case.
- **VeraCrypt** — encrypted containers and full external drives,
  cross-platform, with the (rarely needed, often misunderstood) hidden-volume
  feature.
- **age / 7-Zip AES** — quick single-file or archive encryption. For
  password-based encryption the passphrase does all the work; generate it
  properly ([Passwords](/accounts/passwords/)) and never send it in the same
  channel as the file.

Cloud services with genuine client-side (end-to-end) encryption — Proton
Drive, Tresorit, Cryptomator-on-anything — hold ciphertext they cannot read.
Everything else, including "encrypted" enterprise storage where the provider
manages keys, protects you from outside attackers but not from the provider,
its insiders, or legal process against it. Both models are legitimate;
know which one you're buying. And encrypt your **backups** with the same
care as the originals — an unencrypted backup is a copy of everything,
minus the protections ([Backups](/data/backups/)).
