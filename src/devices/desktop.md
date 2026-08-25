---
title: "Desktop: Windows, macOS, Linux"
description: Telemetry, disk encryption, and account hygiene on the three desktop platforms, with honest notes on what each vendor collects.
tags:
  - windows
  - macos
  - linux
  - devices
status: published
last_reviewed: 2026-08-24
---

Desktop operating systems differ more in *defaults* than in capability. All
three platforms can be configured into a reasonable privacy posture; they
start from very different places.

## Everywhere first

Regardless of OS: automatic updates on,
[full-disk encryption](/data/encryption/) on, a login password that isn't a
formality, an [automatic backup](/data/backups/), and a standard (non-admin)
account for daily use where practical. Those five settings outweigh
everything below.

## Windows

Windows ships with the most telemetry and the most levers to pull.

- **Use a local account** if you can live without the Microsoft-account
  integrations; setup hides the option but it persists. A Microsoft account
  ties activity, search, and (by default) your BitLocker recovery key to one
  cloud identity, the key escrow being the detail most people would want to
  have chosen consciously.
- **Settings > Privacy & Security:** set Diagnostic data to the minimum,
  turn off the advertising ID, "tailored experiences," and app access to
  location/microphone/camera for anything that doesn't need it. Review the
  "General" page, most toggles there exist for Microsoft, not for you.
- **Turn off Copilot/Recall-class features** if present on your build;
  anything that screenshots or indexes your activity for AI features is a
  new data store with your whole life in it. Judge each by where the data is
  processed and stored.
- **BitLocker:** confirm it's on (Settings > Privacy & Security > Device
  encryption) and print the recovery key.
- Windows Home users: consider the Pro upgrade for full BitLocker control,
  or use VeraCrypt.
- **Edge and the Microsoft Store apps** have their own telemetry toggles,
  separately. Or use a [browser you've chosen](/browsing/browsers/).

## macOS

Apple collects notably less by business model, but "less" isn't "none," and
recent versions phone home for services ranging from notarization checks to
Siri suggestions.

- **System Settings > Privacy & Security:** review Analytics (off),
  personalized ads (off), and the per-app permission lists, the same audit
  you'd do on an iPhone.
- **FileVault on**; store the recovery key yourself rather than escrowing to
  iCloud if custody matters to your threat model.
- **iCloud is a decision, not a default.** Each synced category (Photos,
  Drive, Messages) moves data into Apple custody; Advanced Data Protection
  converts most of it to end-to-end encryption at the cost of owning your
  own recovery.
- Silence Spotlight's web suggestions and Siri learning per-app if you'd
  rather searches stay local.

## Linux

Linux distributions collect little to nothing by default, the privacy work
is mostly at install time.

- **Enable LUKS full-disk encryption in the installer.** Retrofitting is
  painful enough to count as reinstalling.
- Some distributions have opt-in (or, in Ubuntu's case, opt-out) telemetry
  and crash reporting; it's disclosed and minimal, but check once.
- The bigger Linux privacy risks are self-inflicted: software from random
  third-party repositories, curl-pipe-to-shell installs, and unmaintained
  packages. Prefer your distribution's repositories and Flatpaks from
  upstream developers, and apply updates promptly like anywhere else.
- Desktop Linux's security architecture (sandboxing, verified boot) lags the
  commercial platforms, a tradeoff you're making for transparency and
  control. Know that it *is* a tradeoff.

## Shared accounts and disk disposal

A "family computer" account is shared custody of everyone's browsing, separate OS accounts cost nothing. And when a machine leaves your hands,
encrypted disks make disposal trivial (destroy the key, the data is gone);
unencrypted disks need actual wiping, not deletion, one more argument for
having turned encryption on the day you got it.
