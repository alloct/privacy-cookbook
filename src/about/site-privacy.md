---
title: Site Privacy
description: What this website collects (nothing), what its host necessarily processes, and every request your browser makes when you load a page.
status: published
last_reviewed: 2026-08-24
---

A privacy site should be accountable for its own behavior. This page
documents exactly what loading The Privacy Cookbook involves, including the
parts we don't control.

## What this site does not do

- No analytics or telemetry of any kind.
- No cookies.
- No tracking pixels, beacons, or fingerprinting scripts.
- No advertising or affiliate links.
- No third-party scripts, fonts, stylesheets, or CDNs — every asset is
  served from this site's own origin.
- No comment systems or embedded social widgets.
- No accounts, forms, or server-side processing of any kind. The site is
  static files.

## What runs in your browser

Two small first-party scripts, both readable in the repository:

- `theme.js` (~1 KB): applies your light/dark preference. If you use the
  toggle, it stores a single value (`theme`) in your browser's
  localStorage — data that stays on your device and is sent nowhere.
- Pagefind, on the [search page](/search/) only: search runs entirely in
  your browser against a locally downloaded index. Queries are never
  transmitted anywhere.

Everything on the site except search works with JavaScript disabled.

## What the host necessarily processes

The site is served by **GitHub Pages**. Like any web host, GitHub's
infrastructure necessarily handles your connection: your IP address, the
pages you request, and standard request headers. GitHub has stated that
Pages visits may be logged for security and operational purposes. We do not
receive or have access to those logs. See
[GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
and [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

It would be dishonest to claim "no data is processed" — no website can
claim that. What we can claim: nothing beyond that unavoidable hosting
layer, and nothing under our control, observes your visit.

If GitHub's necessary logging is itself a concern under your threat model,
read this site through [Tor](/network/tor/) — it works fine there.

## Security headers, honestly

GitHub Pages does not allow sites to set custom HTTP response headers.
Within that constraint:

- **HTTPS/HSTS:** Pages serves over HTTPS with HSTS.
- **Content-Security-Policy:** set via a `<meta>` tag on every page
  (`default-src 'self'` and related directives), which enforces most of
  CSP but — as a documented limitation of meta-tag CSP — cannot enforce
  `frame-ancestors` (clickjacking protection).
- **Referrer-Policy:** `no-referrer`, set via meta tag, so following an
  external link never tells the destination which page you came from.
- Headers that can only be set at the HTTP layer (`X-Content-Type-Options`,
  `Permissions-Policy`) are absent because the host provides no mechanism.
  The full analysis lives in the repository's security documentation.

## Verifiability

The entire site — content, templates, styles, scripts, and build process —
is in the [public repository](https://github.com/alloct/privacy-cookbook).
The deployed site is built from it by a GitHub Actions workflow that is
also in the repository. You don't have to take this page's word for
anything: view source, or check the network panel in your browser's
developer tools — the request list is the whole story.
