---
title: United States
description: Where to find mapped Flock cameras, how to get the audit logs showing who searched them, and what those records have already revealed about how the system is used.
tags:
  - flock-off
  - united-states
status: published
last_reviewed: 2026-08-25
---

::: note
Read the [responsibility note](/flock-off/) on the section index before using
anything here.
:::

The United States is where Flock Safety actually operates, and it is the only
country with a mature ecosystem of tools for tracking it. Flock says its
cameras are used by roughly 5,000 law enforcement agencies and 1,000
businesses, and volunteer mappers have logged well over 100,000 plate readers
nationwide.

## Where the cameras are

[DeFlock](https://deflock.org) is the main crowdsourced mapping project. It
renders plate readers from OpenStreetMap along with device type and the
direction each one faces, and it maintains an identification guide covering the
common makes and models so you can tell a Flock unit from a Motorola or Genetec
one. There is a [companion app](https://deflock.org/app) for contributing
sightings from the street, with offline support and, in some areas, suspected
locations derived from utility permit data.

Because DeFlock stores its data in
[OpenStreetMap](https://www.openstreetmap.org), anything you contribute also
appears in the other maps built on the same dataset, and you can query it
yourself through the Overpass API instead of relying on any one site's
interface.

The [Atlas of Surveillance](https://www.atlasofsurveillance.org/), run by the
Electronic Frontier Foundation with student and volunteer researchers,
approaches it from the other direction. Rather than mapping individual poles it
documents which law enforcement agencies use which surveillance technologies,
plate readers included, with sources attached. It is the fastest way to find out
whether your local department has bought into any of this, and the dataset is
downloadable.

## Who has been searching

[Have I Been Flocked](https://haveibeenflocked.com/) aggregates Flock audit
logs released through public records requests, so you can search for activity
involving a plate or an agency. The dataset is necessarily incomplete, because
it depends on which agencies have released records, and there is often a long
delay between a search happening and the log becoming public. Its
[guide to audit logs](https://haveibeenflocked.com/about/audit-logs) is the
clearest available explanation of the different report types and how to ask for
them.

For filing your own requests, [MuckRock](https://www.muckrock.com/) handles the
mechanics and publishes the results, and its archive often already contains the
policy or contract you were about to ask for. EFF's
[Street-Level Surveillance](https://www.eff.org/issues/street-level-surveillance)
project explains the technology and the legal landscape and has run large
coordinated records campaigns on plate reader data sharing.

Every state has its own public records statute, and that statute, not federal
FOIA, is what applies to a city police department or county sheriff. Cite it by
name. See the [research methods](/flock-off/methods/) page for how to word a
request so it produces a usable spreadsheet rather than a printout.

## What the records have already shown

This is not a hypothetical concern, and the specifics are useful both as
precedent and as a template for what to look for.

**Federal immigration enforcement without a contract.** In May 2025, 404 Media
[reported](https://www.404media.co/ice-taps-into-nationwide-ai-enabled-camera-network-data-shows/)
that local and state police had been running Flock lookups on behalf
of federal immigration authorities, giving an agency with no Flock contract
side-door access to a nationwide camera network. The evidence was a search log
obtained through a single public records request to one police department in
Danville, Illinois, which contained thousands of nationwide and statewide
lookups with reasons typed in as "immigration," "ICE," and similar. One
request to one small department documented behaviour across the whole network,
which is worth understanding as a research strategy.

**Agencies you would not expect.** 404 Media later
[found](https://www.404media.co/floridas-wildlife-cops-are-searching-thousands-of-flock-cameras-for-ice/)
the Florida Fish and Wildlife Conservation Commission running searches described
as immigration related across thousands of Flock networks, illustrating that access follows
sharing settings rather than any obvious relationship to an agency's mandate.

**Systematic state-level review.** The University of Washington Center for Human
Rights filed requests with 48 Washington agencies known to use Flock and
published an analysis of what came back. It is a good model for doing this
properly at scale, and its
[write-up](https://jsis.washington.edu/humanrights/2025/10/21/leaving-the-door-wide-open/)
explains the audit report types in careful detail.

**Officers using it on people they know.** This is the most consistently
documented abuse. A
[Washington Post investigation](https://www.washingtonpost.com/technology/2026/08/19/we-found-cops-who-misused-flock-their-police-departments-didnt-know/)
published in August 2026 identified dozens of cases of officers using plate
reader systems to track current and former partners, with Flock's system
involved in most of them, and found officers whose own departments had never
checked their logs at all. The
Institute for Justice
[maintains a running tally](https://ij.org/police-have-reportedly-used-license-plate-readers-to-stalk-romantic-interests-at-least-14-times-in-recent-years/)
of such cases. In several, including one in Milwaukee, the misuse surfaced only
because the victims looked up their own plates in publicly released audit logs.
That is the single strongest argument for this kind of transparency work: the
oversight mechanism that caught it was members of the public reading records,
not the agency running the system.

**The records are being narrowed.** Flock has reduced the detail in network
audit logs, citing officer safety and the risk of undercover officers being
identified from published data, and agencies have been advised to keep stated
search reasons vague. Request early, request often, and keep what you get,
because the version of a record available today may be better than the version
available next year.

## Law and local leverage

State law varies and is worth checking before you write anything. California's
S.B. 34 is the most cited example, requiring agencies that operate plate
readers to publish a usage and privacy policy and restricting who they may share
data with. Several states have since moved to limit sharing, particularly across
state lines. Your state may impose duties that your local agency is quietly
ignoring, and a documented failure to publish a required policy is a much
easier argument to win than a general objection to surveillance.

The practical leverage is almost always local and almost always procedural. Camera
contracts come up for renewal, budgets get approved in public meetings, and
council agendas are published in advance. The questions that tend to land:

- What is the retention period, and why that number?
- Which outside agencies can query our cameras, and who approved that?
- Has anyone reviewed the audit logs, and what did the review find?
- What happens to an officer who runs a search without a valid reason, and has
  that ever happened here?

Ask them in writing, before a renewal vote, with the audit log in your hand.
