---
title: "BreachForums: Grepping for His Own Name"
description: The administrator of the largest English-language breach forum wanted to know whether his personal email was in a stolen database. He checked from the account that could never be linked to it.
tags:
  - darwin-awards
  - identity-reuse
  - compartmentalization
status: published
last_reviewed: 2026-08-25
---

## Incident

Conor Brian Fitzpatrick ran BreachForums, a marketplace for stolen data, under
the handle "pompompurin" from roughly March 2022 until the FBI arrested him at
his home in Peekskill, New York on 15 March 2023. He pleaded guilty later that
year. His original sentence of seventeen days (time served) was vacated by the
Fourth Circuit as unreasonably lenient, and in September 2025 he was
resentenced to three years in prison plus twenty years of supervised release.

## What happened

The arrest affidavit describes a stack of independent identifiers, and the
foundation was an old forum database. RaidForums, the predecessor site the FBI
seized in April 2022, held pompompurin's account records including the IP
addresses he had used. Nine of those resolved through Verizon to Fitzpatrick's
household.

The part worth studying is a private message from 28 November 2020. Someone had
posted a stolen database from the keyboard app "ai.type" on RaidForums, and
pompompurin was talking to the site's administrator about whether the copy on
the forum was complete. He explained that one of his own old email addresses
appeared in the breach according to Have I Been Pwned but was missing from the
file on the forum. Then, in the same message, he wrote that he did not want to
share his actual email "for obvious reasons" and offered
`conorfitzpatrick02@gmail.com` as an address that "seems to have the same case
as mine." He also mentioned that he had run `grep` against the database for the
string "conorfitzpatrick."

Google records showed he had registered that address months before the
conversation. Google Pay accounts for it and for a newer variant were tied to a
phone number in his name, and a recovery address led to an IP registered to
another Fitzpatrick. Records from a cryptocurrency service added more
overlapping IPs. When agents arrested him he confirmed his name, the handle,
and that he owned BreachForums.

## The OPSEC mistake

He used the criminal identity to research the private one. Checking whether
your personal email turns up in a breach dump is a sensible thing to do. Doing
it from the account whose entire value depends on never touching that email
collapses the separation between the two, in writing, in a database that
someone else controls.

Two structural problems sat underneath the slip. A real-name email address
existed at all, which meant there was something to check. And the predecessor
forum had been accessed from his home network, so the message landed in a
record that already pointed at his address.

## Why it mattered

Forum databases are not private and they are not temporary. RaidForums was
seized, which handed investigators years of private messages to read at
leisure, with the confidence that comes from records the author assumed were
gone. A message written in 2020 became evidence in 2023.

The search term made it worse. He did not just mention an address, he supplied
the exact string an investigator would need and explained that he had searched
for it. A generic query would have been noise. A unique surname plus a first
name is a fingerprint, and he provided it along with his reason for caring.

## How it could have been avoided

Keep questions inside the identity they belong to. Breach exposure checks about
a real person are the real person's business, done from an unrelated context,
with no connection to the pseudonym. If the pseudonym needs to know something
that only matters to the human behind it, that is the moment to stop.

Structurally, the persona should have had nothing to check: no real-name
mailbox in existence, and no access to the forum from a home connection.

## Defensive lesson

Most compartmentalization failures are not technical. Nobody deanonymized him
by breaking Tor or cracking encryption. The failure was a moment when one
identity needed information that only the other identity cared about, and he
answered the question from the wrong side of the wall.

This applies well outside crime. The same shape appears when a pseudonymous
account asks a question that only makes sense for a specific real person, when
a throwaway account is used to look up your own address, or when a work device
is used to research something personal. Build identities so that each one can
answer its own questions, as
[Identity Compartmentalization](/opsec/compartmentalization/) describes, and
give each one its own [email aliases](/communications/email/) so that a
personal address is never the thing you need to go looking for.

## Sources

- [FBI affidavit in support of the criminal complaint](https://www.justice.gov/usao-edva/file/1300536/dl?inline=), U.S. Attorney's Office, Eastern District of Virginia (2023), which contains the RaidForums message quoted above
- [United States v. Fitzpatrick, No. 24-4102](https://www.ca4.uscourts.gov/opinions/244102.P.pdf), U.S. Court of Appeals for the Fourth Circuit (2025), vacating the original sentence
- [Founder of One of World's Largest Hacker Forums Resentenced to Three Years in Prison](https://www.justice.gov/opa/pr/founder-one-worlds-largest-hacker-forums-resentenced-three-years-prison), U.S. Department of Justice (2025)
- [How the FBI caught the BreachForums admin](https://techcrunch.com/2023/03/24/how-the-fbi-caught-the-breachforums-admin/), TechCrunch (2023)
- [Feds Charge NY Man as BreachForums Boss "Pompompurin"](https://krebsonsecurity.com/2023/03/feds-charge-ny-man-as-breachforums-boss-pompompurin/), Krebs on Security (2023)
