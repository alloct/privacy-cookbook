---
title: "Pryx: The Side Project That Matched the Persona"
description: An actor who dealt in stolen credentials was reportedly traced through his own reused ones, a public code repository, and a hobby website whose text and code turned up under his forum alias.
tags:
  - darwin-awards
  - identity-reuse
  - credential-reuse
status: published
last_reviewed: 2026-08-25
---

::: warning Vendor research, not a court record
Every other entry in this section rests on charges, filings, or admissions.
This one does not. Nobody has been publicly charged as "Pryx." The
identification comes from a commercial threat intelligence firm whose
underlying evidence is not published, and the secondary reporting around it
contradicts itself on basic points such as nationality and age. We include the
case because the method is instructive and repeatable, and we deliberately do
not repeat the name that was published. Read the rest of this page as an
account of how attribution was attempted, not as a finding of fact about any
individual.
:::

## Incident

From the middle of 2024, someone posting as "Pryx" moved from leaking data
belonging to universities to targeting government systems in the Gulf and the
Caribbean, then private companies. He was a founding member of the Hellcat
extortion group, wrote technical guides for a Russian-language forum, and
designed a server-side stealer that held collected data for retrieval over Tor
rather than beaconing it out to a server, an approach that produces very little
outbound network noise on the victim's side. He also gave interviews, on the
record, to researchers and to the press.

In March 2025 the threat intelligence firm KELA published research claiming to
identify him along with another member of the group.

## What happened

The reported chain of evidence is notable for how ordinary each link is.

A website that presented itself as a hobby resource for security enthusiasts
was connected to the persona by shared code and text, with material published
on the site later appearing on forums under the Pryx alias. Public code
repositories and email addresses matched across the two identities, and those
in turn pointed at messaging accounts. Login credentials were reused across
accounts belonging to both the persona and the person, and researchers noted
the irony that actors whose trade was buying and selling infostealer logs
turned up inside infostealer logs themselves. A second handle and
correspondence with a forum administrator provided corroboration.

## The OPSEC mistake

Publishing under two names out of one workshop. The same person wrote the
guides, wrote the site, wrote the code, and picked the usernames and mailbox
names, and did not change habits when switching identities. Nothing here
required an interception or a seizure. It required noticing that two bodies of
work looked the same and then following the account names.

The interviews compound it. Every interview trades reach for attributable
material: claims that can be checked against records, a timeline of activity, a
speaking voice, and a large sample of phrasing and opinion that later gets
compared against everything else the persona wrote.

## Why it mattered

Credential reuse is the shortest path between two identities that exist. It
does not degrade, it does not require a mistake at any particular moment, and
it is discoverable by anyone with access to the enormous pool of dumped and
stolen credentials that circulates continuously. One password shared between a
pseudonymous forum account and a personal service is a direct link, and the
person who finds it does not need a warrant.

Personal device hygiene turned out to be part of the operation. Running malware
against other people does not exempt you from it, and stealer logs get resold,
aggregated, and indexed. If your own machine is infected, your session cookies,
saved logins, and browser history join a dataset that researchers and
investigators routinely query, without anyone having to target you personally.

Finally, writing and code carry authorship. Given a large enough corpus,
sentence habits, formatting choices, comment style, and reused snippets link
documents together with no identifying data in them at all.

## How it could have been avoided

Separate everything that publishes. Distinct credentials for every account,
generated rather than chosen, never shared between identities. No shared
domains, hosting, or repositories between a persona and a person, including
projects that seem innocuous. And, if anonymity is the goal, no interviews,
because publicity and attribution resistance are directly opposed.

## Defensive lesson

Reused credentials are the highest-yield attack path in existence and, for the
same reason, the highest-yield attribution path. This is why
[Passwords](/accounts/passwords/) argues for unique generated credentials
everywhere and why a
[password manager](/accounts/password-managers/) is the practical way to
achieve it. The threat model here is not only "someone logs into your account,"
it is also "someone proves these two accounts are the same person."

The health of your own machine is part of your privacy, not a separate
concern. An infostealer does not care who you are, and a single infection
exports the contents of your browser into a market. Keeping the
[desktop](/devices/desktop/) you actually use clean and patched does more for
you than any individual privacy setting.

What you write and what you build identifies you. If you maintain a
pseudonymous presence for real reasons, treat prose and code as part of the
persona and keep hobby projects on the correct side of the wall, as
[Identity Compartmentalization](/opsec/compartmentalization/) describes.

One more lesson, aimed at readers rather than at the subject: be careful how
you consume attribution research. Deanonymisation published by a company with
something to sell, describing an uncharged person, with evidence you cannot
inspect, is a claim and not a verdict. The methods are usually sound and
usually worth learning from. The conclusions deserve the same scepticism you
would want applied to a report about you.

## Sources

- [Hellcat Hacking Group Unmasked: Investigating Rey and Pryx](https://www.kelacyber.com/blog/hellcat-hacking-group-unmasked-rey-and-pryx/), KELA (2025), the vendor research that made the identification. Its underlying evidence is not published and we have not verified it.
- [Who are Hellcat Ransomware Group?](https://www.bridewell.com/insights/blogs/detail/who-are-hellcat-ransomware-group), Bridewell, background on the group and its stated tooling
- [Interview with Pryx, Part 2](https://www.infostealers.com/article/interview-with-pryx-part-2-diving-deeper-into-server-side-stealers-other-interesting-chit-chats-video-included/), InfoStealers, an on-the-record interview describing the server-side stealer design
