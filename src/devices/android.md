---
title: Android
description: Permission auditing, Google account settings, and the realistic privacy ceiling of stock Android — plus when GrapheneOS makes sense.
tags:
  - android
  - mobile
  - devices
status: published
last_reviewed: 2026-08-24
---

Android's privacy story is really two stories: the operating system, which
has grown genuinely strong isolation and permission controls, and the Google
services layered onto it, which are a comprehensive data-collection platform.
Most "Android privacy" work is about narrowing the second while keeping the
first.

## The settings pass (30 minutes, stock Android)

1. **Settings → Security & privacy → Permission manager.** Audit Location,
   Camera, Microphone, and Contacts. Revoke anything without an obvious
   functional need; prefer "Ask every time" and "While using" over "Always."
   Location deserves special suspicion — weather widgets and shopping apps
   collecting "always" location are selling it.
2. **Turn off the advertising ID** (Privacy → Ads → Delete advertising ID).
   This single toggle degrades cross-app tracking meaningfully.
3. **Google account, not just the phone:** myaccount.google.com → Data &
   privacy. Set Web & App Activity, Location History (Timeline), and YouTube
   History to off or auto-delete at the shortest interval. This is where the
   real dossier lives.
4. **Private DNS** (Network settings): a filtering resolver like Quad9 or
   Mullvad covers every app on the device — see [DNS](/network/dns/).
5. **Notifications on the lock screen** leak message contents to anyone
   holding the phone; set sensitive apps to hide content.
6. **Review "special app access":** device admin apps, usage access,
   accessibility services. Accessibility is the permission malware wants
   most — nothing should be there you didn't knowingly put there.
7. **Updates:** take them immediately, and treat the device's end-of-support
   date as a real deadline. An unpatched phone accumulates publicly known,
   actively exploited holes.

## App hygiene

Install from the Play Store or F-Droid, not sideloaded APKs from search
results. Before installing anything, the question isn't "is this app
malware" — it's "does this app's business model require my data." A free
flashlight-tier utility with network access and a location permission is
answering that question honestly in its manifest. Fewer apps is the strongest
app-privacy policy; the browser version of a service almost always collects
less than the app.

## Vendor skins

Samsung, Xiaomi, and other manufacturers add their own accounts, analytics,
and preinstalled partnerships on top of Google's. The settings pass above has
a vendor-flavored twin (Samsung's Customization Service, Xiaomi's
recommendations and MSA); expect to repeat the exercise in the
manufacturer's account settings, and to disable or hide the preloads you
can't uninstall.

## The ceiling, and GrapheneOS

Fully de-Googling stock Android isn't possible; Play Services runs with deep
privileges and its collection is part of the deal. If your
[threat model](/start-here/threat-modeling/) justifies more,
[GrapheneOS](https://grapheneos.org/) — a hardened Android for Pixel devices
— removes Google from the trusted base while (optionally) running Play
Services as an unprivileged, sandboxed app. It's the credible version of the
"private phone," with real costs: supported hardware only, some app
compatibility friction (payment and banking apps vary), and no Google device
services. For most people the settings pass captures most of the value; for
journalists, activists, and the seriously targeted, Graphene is the standard
recommendation for a reason.

One thing no OS fixes: the cellular network. Your carrier logs which towers
your SIM touches, continuously, by design — that's a
[metadata problem](/communications/metadata/) settings can't reach.
