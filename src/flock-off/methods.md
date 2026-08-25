---
title: Research Methods
description: How to find plate reader cameras, get the contracts and policies behind them, obtain the logs of individual searches, and check your findings before you publish them.
tags:
  - flock-off
  - records-requests
status: published
last_reviewed: 2026-08-25
---

::: note
Read the [responsibility note](/flock-off/) on the section index before using
anything here.
:::

The techniques below are jurisdiction-neutral. The country pages cover which
specific tools, statutes, and datasets apply where you are.

## Find the cameras

Plate readers are physically distinctive: a short pole or existing utility pole,
one or more small cameras aimed along a traffic lane, usually a solar panel and
a battery box, sometimes a vendor sticker. They are installed where traffic
funnels, so intersections, arterial roads, and the entrances to neighbourhoods
and car parks.

The community mapping effort runs on OpenStreetMap, which means anyone can
contribute and anyone can query the results. Cameras are tagged as
`man_made=surveillance` with `surveillance:type=ALPR`, plus manufacturer and
direction where known. Because the data lives in OpenStreetMap rather than in
one project's database, every map that renders it benefits from the same
contributions and no single site owns the result.

Useful practice when logging one:

- Record the direction it faces, not just the position. A reader covers specific
  lanes, and direction is what makes the data usable for understanding coverage.
- Note the manufacturer if it is marked. Mixed vendor deployments are common and
  the vendor determines what records exist.
- Photograph from public space, and keep it undramatic. You are documenting
  street furniture.
- Check pole attachment and right-of-way permits at your local authority.
  Permits are usually public and often predate installation, which means they
  can tell you where cameras are about to appear.

## Find the paperwork

Cameras arrive through a procurement process, and that process generates
documents that are almost always disclosable:

- Contracts, quotes, invoices, and purchase orders, which show scale, cost,
  duration, and renewal dates.
- The usage and privacy policy, which should state retention periods, who may
  run a search, what counts as a valid reason, and what sharing is enabled.
- Data protection or privacy impact assessments, where the law requires them.
- Council, committee, and police board agendas and minutes. These usually come
  first, before any camera exists, and they are the only stage at which the
  decision is still open.
- Grant applications, which often describe the intended use more candidly than
  the public-facing policy does.

## Find the searches

This is the part most people skip and the part that produces news.

In the Flock system, agencies can export several distinct records from the
Insights tab of their dashboard, and knowing the names matters because a vague
request gets a vague answer:

- **Organization Audit**: searches run by the agency's own users, including
  searches of other networks shared with it.
- **Network Audit**: searches of the agency's cameras run by outside users. This
  is how you discover which other agencies have been querying your town.
- **Event Log** and **Network Sharing** reports: system events, and a list of
  which organisations share data with which.

Entries typically include the user and their organisation, the date and time,
how many networks and devices were searched, the plate or partial plate, a free
text reason, a case number, and filters such as vehicle make. Some agencies also
run a public Transparency Portal, but the audit published there is heavily
redacted and normally identifies users only by an opaque identifier.

Three limits to keep in mind:

- The audit records the search, not the result. It shows that someone looked,
  not what they found or what they did next.
- The reason field is an unverified claim typed by the person running the
  search. It is evidence of what they said, not of why they did it.
- The records are getting worse on purpose. Flock has narrowed what appears in
  network audits, citing officer safety, and agencies have been advised to keep
  stated reasons as vague as the rules allow. Blanket entries like
  "investigation" are now common.

## Write a request that works

- Name the exports explicitly, including the report names above, rather than
  asking for "records about cameras."
- Cite the statute you are relying on and the response deadline it sets.
- Ask for the native spreadsheet export. Agencies will otherwise send a printed
  PDF, which destroys the data for analysis.
- Give a date range. Requests without one attract a fee estimate designed to end
  the conversation.
- Identify the right custodian. It may be the police department, the sheriff, a
  city clerk, or a designated records officer.
- Ask for a fee waiver if your jurisdiction allows one for public interest or
  journalistic requests.
- Appeal denials. Partial denials and overbroad exemption claims are routinely
  reversed, and the appeal itself creates a record.

You are exercising a right, not asking a favour, and a polite, specific,
unhurried request is much harder to refuse than an angry one.

## Check your work before publishing

- Absence from a map is not evidence that no cameras exist. Coverage is
  incomplete everywhere and a small number of entries are stale.
- Understand your redactions. An opaque user identifier is not a name, and
  guessing at one is how good research becomes defamation.
- Do not publish other people's plates. A plate is personal data about a person
  who did not ask to be part of your project.
- Distinguish what a document shows from what you infer from it. The strongest
  version of this work is boring and precise.

## Contribute it back

Mapping and records work compounds only if the results are shared. Add cameras
to OpenStreetMap so every downstream map improves. Send obtained audit logs to
the aggregators in their original exported form, without cleaning or renaming
them, because the untouched export is what makes them verifiable. Upload
contracts and policies to a public document repository so the next person in
the next town has a template to point at.
