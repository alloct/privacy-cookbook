# Security

The security documentation for the site itself: threat model, attack
surface, controls, and honest limitations. The public-facing summary lives
at `/about/site-privacy/`; this file is the maintainer version.

## Threat model

Assets worth protecting:

1. **Reader safety and privacy.** Visitors researching privacy may be at
   elevated risk (targets of stalking, surveillance, coercion). The site
   must not observe, log, or leak their reading behavior to anyone —
   including us.
2. **Content integrity.** The advice must not be tamperable: a poisoned
   recommendation ("use this backdoored tool") is the worst realistic
   attack on a site like this.
3. **The repository and build pipeline**, which produce 1 and 2.

Adversaries considered: opportunistic web attackers, malicious contributors
(PRs), supply-chain compromise of a dependency or GitHub Action,
compromised maintainer accounts. A nation-state targeting GitHub itself is
acknowledged and out of scope — readers with that concern should use Tor,
as the site itself advises.

## Attack surface, enumerated

**Runtime (what visitors touch):** static files on GitHub Pages. No
server-side code, no database, no forms, no cookies, no third-party
origins. Client-side JS is ~1 KB of first-party theme code on every page
plus Pagefind's UI on `/search/` only. This is close to the minimum
possible attack surface for a website.

**Build time:** Node.js, Eleventy, Pagefind, three markdown-it plugins,
js-yaml, and their transitive dependencies (see `dependencies.md`). A
compromised dependency could inject content or scripts at build time —
this is the largest real risk, mitigated by: a small locked dependency
tree (`package-lock.json`, installed with `npm ci`), no postinstall-heavy
packages, Dependabot alerts, and the CSP meta tag which would block any
injected *external* script at the browser even if one slipped through.

**CI/CD:** GitHub Actions with least privilege — the test job gets
read-only `contents`; only the deploy job (main branch only) holds
`pages: write`/`id-token: write`. Third-party actions are pinned to full
commit SHAs so a compromised tag can't ship new code into our pipeline.
Repository settings should require PR review before merge to main
(enforce in GitHub settings; it can't be committed to the repo).

**Content:** Markdown is rendered with markdown-it's default HTML handling;
contributors' raw HTML passes through — review PRs accordingly. The
realistic content attack is editorial (bad advice, poisoned links), which
is why recommendation and Darwin Award changes need a second reviewer.

## Controls on the served site

- **HTTPS + HSTS:** provided by GitHub Pages ("Enforce HTTPS" must stay
  enabled in repo settings).
- **Content-Security-Policy (meta tag):**
  `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'
  data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri
  'self'; form-action 'self'` — no external origin can load even if a
  template regression tries. (`img-src data:` exists because Pagefind's UI
  draws its search icon as an inline data-URI SVG; inline image data can't
  exfiltrate anything, so the relaxation is cosmetic-risk only.)
- **Referrer-Policy `no-referrer` (meta tag):** outbound links don't leak
  the page the reader was on.
- **No cookies / no storage** except one localStorage key (`theme`) written
  only if the visitor uses the toggle.

## Hosting limitations (stated, not papered over)

GitHub Pages provides **no mechanism for custom HTTP response headers.**
Consequences:

- `frame-ancestors` (clickjacking protection) cannot be enforced — meta-tag
  CSP explicitly ignores it per spec. Framing this site is possible; the
  damage potential (it's a content site with no sessions or forms) is low.
- `X-Content-Type-Options: nosniff` and `Permissions-Policy` cannot be set.
  Pages serves correct MIME types, and no page requests any powerful API,
  which bounds both risks.
- GitHub necessarily sees visitor connection data (IP, requested URLs) at
  the hosting layer. We never see it, and we say so publicly. Claiming
  "zero data processed" would be false; we don't claim it.

If these limitations ever become unacceptable, the exit path is any static
host that allows headers (Cloudflare Pages, Netlify, self-hosted nginx) —
the site is plain files and moves freely.

## Secrets

There are none. The project needs no API keys, tokens, or credentials;
deployment uses GitHub's OIDC-based Pages deployment (no long-lived
secrets). `.gitignore` excludes common secret-file patterns defensively,
and CI runs a secret-pattern scan (`gitleaks`) to catch accidents in
contributed content.

## Incident response

Suspected compromise of content or pipeline: revert the bad commit (git
history is the audit trail), force a rebuild/redeploy from a clean commit,
rotate any maintainer credentials involved, and document what happened in
an issue. Security reports arrive via GitHub private vulnerability
reporting (see `SECURITY.md`).
