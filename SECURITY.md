# Security Policy

## Reporting a vulnerability

Use **GitHub's private vulnerability reporting** for this repository
(Security tab, then "Report a vulnerability"). That channel reaches the
maintainers privately and tracks the report.

If private reporting is unavailable to you, open a regular issue saying
only that you have a security report and need a contact. Do not include
details in the public issue.

## What counts as a security issue here

This is a static site, so the interesting surface is the pipeline and the
content:

- Anything enabling script execution or content injection on the published
  site (template/render bugs, CSP bypasses that matter in context).
- Vulnerabilities in the build or deployment pipeline (GitHub Actions
  workflow, dependency chain) that could let an attacker alter published
  content.
- Accidentally committed secrets or personal data in the repository or its
  history.
- Dangerous errors in security-relevant content, meaning advice that, if
  followed, would concretely harm a reader (for example, a recommendation
  pointing at a known-compromised tool or download). We treat these with
  the urgency of technical vulnerabilities.

## What is not a security issue

- Factual errors, outdated tool information, broken links, typos: normal
  issues/PRs, warmly welcomed.
- Editorial disagreement with a recommendation: open an issue with your
  sources; that's how the site is supposed to work.
- Reports about GitHub Pages infrastructure itself: report to
  [GitHub](https://bounty.github.com/); we can't fix their hosting layer.
- The absence of HTTP headers GitHub Pages does not support. This is a
  documented hosting limitation, explained on the site's
  [privacy page](src/about/site-privacy.md).

## Handling

Reports are acknowledged as quickly as maintainer capacity allows
(volunteer project, no SLA). Confirmed issues are fixed via revert or
patch, redeployed (deployment is automatic on merge), and credited in the
fix's release notes if you want credit. There is no bug bounty; there is
genuine gratitude.

## Scope note

The published site stores no user data, sets no cookies, and has no
accounts or sessions, so reports premised on stealing user data from the
site will generally be out of scope.
