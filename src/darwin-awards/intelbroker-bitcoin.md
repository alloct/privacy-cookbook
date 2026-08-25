---
title: "IntelBroker: One Payment in the Wrong Currency"
description: A seller who demanded Monero for everything accepted a single 250 dollar Bitcoin payment from an undercover agent. The wallet behind it traced back through a KYC-verified exchange account in his own name.
tags:
  - darwin-awards
  - cryptocurrency
  - correlation
status: published
last_reviewed: 2026-08-25
---

::: note Charges, not convictions
The account below comes from a criminal complaint and indictment. These are
allegations. West was arrested in France in February 2025 and the United States
has sought his extradition; as of this review he has not been tried, and he is
presumed innocent. What makes the case worth reading is that the complaint
documents the attribution method in unusual detail.
:::

## Incident

In June 2025 the U.S. Attorney's Office for the Southern District of New York
unsealed a four-count indictment and complaint charging Kai West, a British
national, with operating the online persona "IntelBroker." Prosecutors allege
he and an associated group stole data from more than forty organisations
between 2023 and 2025, offered it for sale for over two million dollars, and
caused damages in excess of twenty-five million.

## What happened

According to the complaint, IntelBroker insisted on Monero for sales, which is
designed to make transaction tracing difficult. In January 2023 an undercover
FBI agent negotiated the purchase of an API key and login credentials for
roughly 250 dollars and persuaded the seller to accept Bitcoin instead.

That single payment was enough. The receiving address had been funded by a
wallet created the same day by an account at the exchange Ramp, whose
know-your-customer records held a UK driving licence in the name Kai Logan West
along with his date of birth. The same licence was associated with a Coinbase
account opened under the alias "Kyle Northern." One email address appeared
across the exchange accounts and ordinary consumer services, and warrant
returns on that mailbox produced identity documents, selfies, and university
housing and finance correspondence addressed to "Kai," including a certificate
confirming enrolment on a cyber security programme.

Investigators then added a second, independent line of evidence that had
nothing to do with cryptocurrency. They matched the personal Google account's
YouTube viewing history against IntelBroker's forum posts and found the same
videos being watched minutes before they were posted about. In one example
cited in the complaint the gap was three minutes. The persona had also
presented itself in a recorded interview as a Serbian and Russian speaker with
poor English, which the records contradicted.

## The OPSEC mistake

An exception to his own rule, for 250 dollars. Monero was the policy and
Bitcoin was the favour, and the favour is the transaction that became evidence.

The exception only mattered because of what sat behind it. His Bitcoin was one
hop from an exchange account verified against a government-issued document in
his real name. Once any traceable payment existed, the chain from persona to
person was two steps long. A single reused email address then tied the
financial identity to the personal one, and the personal one to a university.

## Why it mattered

Public blockchains are permanent, complete, and analysable retroactively. A
Monero-only policy is a real control, but it protects nothing that happened
outside it. The undercover purchase cost an investigator 250 dollars and
produced a record that cannot be withdrawn, revised, or aged out.

The behavioural evidence matters just as much, because it did not depend on any
mistake with money. Watch history against post timestamps is correlation
between an account he was logged into as himself and an account that was
supposed to be someone else. That technique needs no exception, no slip, and no
cooperation from the target. It only needs both accounts to be active on the
same machine, in the same session, run by the same human with the same
attention span.

## How it could have been avoided

Treat a payment policy as a technical constraint rather than a preference,
because a preference is exactly what an undercover buyer will negotiate. More
fundamentally: an identity-verified exchange account and a pseudonymous wallet
should never share a funding path, because on a public ledger that connection
is permanent and one-directional in nobody's favour.

The timing correlation required separating not just accounts but sessions and
machines, so that personal browsing and persona activity never happen in the
same place at the same time.

## Defensive lesson

Three things generalise here, and only one of them is about crime.

A rule that admits exceptions is not a rule. The exception is the part that
gets recorded, and it is usually granted under mild social pressure for
something small. If a boundary matters, it needs to be enforced by
configuration rather than by judgement in the moment, the same principle that
[OPSEC Fundamentals](/opsec/fundamentals/) describes as consistency beating
intensity.

Identity-verified accounts are permanent anchors. Any financial system that has
checked your documents will keep that record and can be compelled to produce
it, so anything connected to it inherits the connection. That is worth knowing
whether you are moving money privately or just deciding which service to trust
with a copy of your passport.

Timing is an identifier. You do not need to leak a name to be correlated; being
active in two places at once, repeatedly, is sufficient, and mainstream
services keep second-resolution logs of your activity by default. This is the
same problem [Communication Metadata](/communications/metadata/) covers, and
the reason
[Identity Compartmentalization](/opsec/compartmentalization/) has to extend to
when and where you do things, not only which account you use.

## Sources

- [Criminal complaint, United States v. Kai West](https://www.justice.gov/usao-sdny/media/1404616/dl?inline=), U.S. Attorney's Office, Southern District of New York (2025), which sets out the wallet tracing and the YouTube timing analysis
- [Serial Hacker "IntelBroker" Charged For Causing $25 Million In Damages To Victims](https://www.justice.gov/usao-sdny/pr/serial-hacker-intelbroker-charged-causing-25-million-damages-victims), U.S. Attorney's Office, Southern District of New York (2025)
- [Notorious cybercriminal "IntelBroker" arrested in France, awaits extradition to US](https://cyberscoop.com/intelbroker-cybercriminal-kai-west-arrested/), CyberScoop (2025)
- [The IntelBroker Takedown: Following the Bitcoin Trail](https://www.chainalysis.com/blog/breachforum-intelbroker-takedown-french-cybercrime-unit-july-2025/), Chainalysis (2025), a vendor account of the blockchain analysis
