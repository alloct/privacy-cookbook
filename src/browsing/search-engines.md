---
title: Search Engines
description: Search queries are among the most sensitive data you produce. The alternatives, their sources, and their business models.
tags:
  - search
  - tracking
status: published
last_reviewed: 2026-08-24
---

Search history is a diary you didn't know you were keeping: health worries,
legal questions, relationship trouble, employer names, travel plans. Logged
against your account or IP address, it is one of the most complete behavioral
records that exists about you. Moving it away from your ad profile is a
one-minute change.

## What a search engine can log

Query text, timestamp, IP address, browser fingerprint, which results you
clicked, and (if you're signed in) your identity, joined against everything
else that account does. Google's own account controls page is a candid
inventory of what gets retained. The default is: everything, indefinitely
tied to you, unless you configure otherwise.

## The alternatives

Most private search engines are frontends: they buy results from Bing,
Google, or Brave's index and interpose themselves so the upstream provider
sees aggregate queries, not you.

| Engine | Results from | Model | Notes |
| --- | --- | --- | --- |
| DuckDuckGo | Bing + own crawler | Non-tracking ads | The mainstream option; no query logs tied to users |
| Startpage | Google | Non-tracking ads | Google results without a Google login; owned by System1, an ad-tech firm, its no-logging policy has held up but the ownership is worth knowing |
| Brave Search | Own index | Ads / paid tier | Independent index, no upstream dependency |
| Mojeek | Own index | Ads | Fully independent crawler; results are weaker, transparency is excellent |
| SearXNG | Aggregates many | Self-hosted / public instances | Open-source metasearch; you trust the instance operator instead |

"Private" here means the engine's stated policy plus its business incentives.
None of these can prove a negative about their logging; what you're choosing
is a provider whose revenue does not depend on profiling you, which is a
structural improvement over one whose revenue does.

## Setup that makes it stick

1. Change the default engine in your browser settings, on desktop *and*
   phone, which everyone forgets.
2. Disable "search suggestions" from the network so keystrokes aren't
   streamed to the provider as you type
   (see [Browser Hardening](/browsing/browser-hardening/)).
3. Expect an adjustment period. For most queries the results are equivalent;
   for the occasional local or long-tail query where they aren't, using
   Google deliberately for one search is still a privacy win over using it
   for all of them.

## Logged-out Google is not private

Searching Google without an account still ties queries to your IP address and
fingerprint, and consent banners notwithstanding, still feeds the profile
attached to your browser. If you need Google's results, Startpage gets you
most of them without the profiling.
