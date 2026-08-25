---
title: Privacy Fundamentals
description: The ten habits that deliver most of the value, ordered by effort. Do these before anything exotic.
tags:
  - fundamentals
  - checklist
status: published
last_reviewed: 2026-08-24
---

If you do nothing else this site suggests, do these. They are ordered roughly
by value for effort, they defend against the adversaries most people actually
face, and none of them require unusual technical skill.

## The baseline

1. **Use a password manager and unique passwords everywhere.** Credential
   reuse is how one breached forum account becomes a drained bank account.
   See [Password Managers](/accounts/password-managers/).
2. **Turn on multi-factor authentication for email, banking, and anything
   that can spend money.** Your email account is the master key to everything
   else, it receives every password reset. See
   [MFA](/accounts/multi-factor-authentication/).
3. **Install updates promptly, everywhere.** Most real-world compromises
   exploit vulnerabilities that were patched months earlier. Automatic
   updates on, including the browser and the router.
4. **Encrypt your devices.** Modern phones do this by default; laptops often
   don't. See [Encryption](/data/encryption/).
5. **Back up, and encrypt the backups.** Backups are a security control:
   they turn ransomware and stolen laptops from catastrophes into
   inconveniences. See [Backups](/data/backups/).
6. **Use a browser with content blocking.** Blocking trackers removes the
   single largest collection channel most people are exposed to. See
   [Choosing a Browser](/browsing/browsers/).
7. **Use end-to-end-encrypted messaging.** Prefer it for everything, not
   just "sensitive" conversations, selective use marks the sensitive ones.
   See [Messaging](/communications/messaging/).
8. **Stop answering honestly on forms that don't deserve it.** A loyalty
   card does not need your real birthday. Give data only where there are
   legal or practical consequences for inaccuracy.
9. **Review phone app permissions quarterly.** Location, microphone,
   contacts. Revoke anything an app doesn't visibly need to function.
10. **Delete accounts you no longer use.** Every dormant account is a
    standing breach exposure with your name on it.

## What deliberately isn't on this list

A VPN. Tor. De-Googled phones. Aliased email. All of these have their place (this site covers each) but they address narrower threat models, and doing
them *instead of* the list above is the most common mistake in consumer
privacy. An unpatched browser behind a VPN is still an unpatched browser.

## One honest caveat

This list protects you against breaches, account takeover, casual snooping,
and the bulk of commercial tracking. It does not make you anonymous and it
will not defeat a targeted, well-resourced adversary. If your
[threat model](/start-here/threat-modeling/) includes those, the
[OPSEC](/opsec/) section is where that work starts, after this list, not
instead of it.
