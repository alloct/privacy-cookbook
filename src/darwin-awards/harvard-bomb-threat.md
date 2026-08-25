---
title: "The Harvard Bomb Threat"
description: Tor worked exactly as designed. Being the student who connected to Tor on campus Wi-Fi minutes before the threats arrived did not.
tags:
  - darwin-awards
  - correlation
  - tor
status: published
last_reviewed: 2026-08-24
---

## Incident

In December 2013, Harvard sophomore Eldo Kim emailed bomb threats to
university officials to avoid a final exam, using Tor and the disposable
email service Guerrilla Mail. Buildings were evacuated; he was charged
within two days.

## What happened

The threats arrived through Guerrilla Mail, sent over Tor, neither of
which revealed the sender. But Kim had connected to Tor **through Harvard's
campus wireless network**, which authenticates users. Per the FBI
affidavit, the university simply checked who had accessed Tor on its
network in the hours before the emails arrived. That shortlist was small;
Kim was on it; interviewed that evening, he confessed.

## The OPSEC mistake

Using an anonymity tool from a network that both identified him and made
his tool use conspicuous. Tor hid *what* he was doing, but the campus
network recorded *that* he was doing it, *as him*, *at exactly the wrong
time*. On a network where almost nobody used Tor, the act of using it was
itself the identifying signal.

## Why it mattered

Anonymity is a crowd property. Tor's protection presumes an observer can't
narrow the user set; an authenticated network with a handful of Tor users
at 8:30 a.m. reduces "anonymous" to a very short list of names. No
cryptography was broken. As Bruce Schneier noted at the time, the FBI
used ordinary police work on the list and got a confession.

## How it could have been avoided

Not committing the crime. This catalog is unsympathetic on that point.
Technically, the failure generalizes: an anonymity tool used from an
identifying network defeats itself; whoever operates your network can see
which distinctive protocols you use and when, and can correlate that
timing with public events.

## Defensive lesson

For legitimate anonymity needs (sources, whistleblowers, researchers), the network you start from is part of the threat model. The observer who
can't read [Tor](/network/tor/) traffic can still see *that* you use Tor,
and timing correlation against a small user population is devastating.
Bridges reduce the visibility; being one of many users, or not using an
authenticated network tied to your name, addresses the crowd problem.
Rare tools make you memorable. That theme recurs in
[fingerprinting](/browsing/fingerprinting/).

## Sources

- [FBI affidavit, United States v. Kim (D. Mass. 2013)](https://storage.courtlistener.com/recap/gov.uscourts.mad.164676/gov.uscourts.mad.164676.1.1.pdf)
- [Ars Technica: "Use of Tor helped FBI ID suspect in bomb hoax case"](https://arstechnica.com/information-technology/2013/12/use-of-tor-helped-fbi-finger-bomb-hoax-suspect/) (2013)
- [NPR: "Student Is Charged In Harvard Bomb Scare"](https://www.npr.org/sections/thetwo-way/2013/12/18/255198081/student-is-charged-in-harvard-bomb-scare) (2013)
