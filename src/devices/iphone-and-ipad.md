---
title: iPhone and iPad
description: iOS privacy settings that matter, iCloud custody decisions, and Advanced Data Protection and Lockdown Mode explained.
tags:
  - ios
  - mobile
  - devices
status: published
last_reviewed: 2026-08-24
---

Apple's business model doesn't depend on advertising against your data,
which shows up as stronger defaults than stock Android. App Tracking
Transparency, on-device processing, per-app privacy labels. That's a real
head start, not a finish line: iCloud custody, Apple's own data collection,
and lock-screen leaks all remain your decisions to make.

## The settings pass (20 minutes)

1. **Settings > Privacy & Security > Tracking:** "Allow Apps to Request to
   Track" off. Apps stop asking; the cross-app advertising identifier stays
   unavailable.
2. **Privacy & Security > Location Services:** audit the list. "While
   Using," or "Never," and turn off *Precise Location* for anything that
   only needs a city, like weather. Scroll to System Services at the bottom
   and review. "Significant Locations" keeps an on-device history you may
   prefer not to exist.
3. **Privacy & Security > Analytics & Improvements:** sharing off.
   **Apple Advertising** > Personalized Ads off (Apple runs its own ad
   business in News and the App Store).
4. **Face ID/Touch ID + a 6-digit or alphanumeric passcode.** The passcode
   still gates everything ([Encryption](/data/encryption/)); 4 digits is a
   formality against extraction tooling.
5. **Lock screen:** Settings > Notifications > Show Previews > When
   Unlocked. Also review what's reachable from the locked phone (Control
   Center, Wallet, Reply), each is a function someone who picks up your
   phone can use.
6. **Safari:** or install a [browser you chose](/browsing/browsers/); either
   way set a non-profiling [search engine](/browsing/search-engines/) and
   confirm "Prevent Cross-Site Tracking" is on.
7. **Mail > Privacy Protection on.** Blocks read-receipt tracking pixels.

## iCloud is the real decision

The phone encrypts everything locally by default; the question is what
leaves it. Each iCloud category (Photos, Drive, Messages, Backup) moves data
into Apple custody, where standard protection means Apple holds decryption
keys and can produce content under legal process, the mechanism that
quietly undermines Messages' end-to-end encryption for most users, since
backed-up conversations are only as private as the backup
([Messaging](/communications/messaging/)).

**Advanced Data Protection (ADP)** converts iCloud Backup, Photos, Drive,
and most other categories to end-to-end encryption: Apple can no longer
recover the data, and neither can it recover *you*. Enabling ADP means
owning your recovery key or designating a recovery contact, permanently.
For anyone comfortable with the responsibility, it's the single largest
custody improvement available on the platform. Mail, contacts, and calendars
remain outside E2EE for protocol-compatibility reasons; know that boundary.

## Apps still collect

Apple's rules constrain *cross-app tracking*, not what an app observes about
you inside itself. A social or shopping app with your account, contacts
upload, and in-app activity builds the same profile it builds anywhere.
App Tracking Transparency is not a reason to install things freely, the
[fewer-apps principle](/devices/android/) applies identically, and privacy
"nutrition labels" on the App Store are self-reported.

## Lockdown Mode

For people who may be individually targeted with commercial spyware (journalists, activists, dissidents, executives) **Lockdown Mode** trades
functionality (message attachments, complex web tech, unknown FaceTime
calls) for a drastically reduced attack surface against exploit chains of
the Pegasus class. It is deliberately heavy-handed and most people don't
need it; if your [threat model](/start-here/threat-modeling/) includes
state-grade attention, it's one switch and worth every inconvenience.

As with Android, the cellular layer is out of the OS's hands: carrier
records, tower locations, and SIM identifiers accumulate regardless of
settings, the boundary where device privacy hands off to
[network privacy](/network/) and [metadata](/communications/metadata/).
