# Adding a Recommendation

Recommendation pages name specific products, which carries editorial
obligations regular guides don't have. Read the rules in
`src/recommendations/index.md` first — they're the public contract.

## Structure

A recommendations page covers a category (password managers, browsers…),
not a single product. It opens with a link to the background guide, states
its criteria, then covers each pick using this structure (sections may be
merged where natural, but every element must be present for each major
recommendation):

```markdown
## <Tool name> — <one-phrase positioning>

**What it is:** one sentence.

**Who it's for:** the audience/threat models it fits.

**Why:** the properties that earn the recommendation — audits, architecture,
track record, licensing — with footnote citations for the load-bearing
claims.

**Drawbacks:** every real cost. A recommendation without drawbacks is
missing information, not describing a perfect product.

**Licensing:** open source (license) / proprietary; pricing model.
```

Close the page with a **"Not recommended"** section where it earns its
place — explaining *why* something popular fails the criteria is often the
most useful content on the page.

## Rules (non-negotiable)

- **No affiliate links.** Link to the project's own site, not through
  anything.
- **Criteria before brands:** the page must state what qualifies a tool so
  readers can re-run the evaluation.
- **Cite the strong claims.** "Independently audited" links the audit.
  "Proven no-logs" links the court case or seizure that proved it. Vendor
  marketing is a claim, not a fact.
- **`last_reviewed` discipline matters most here.** Products change owners
  and behavior; when you touch a recommendations page, re-verify each pick
  quickly before bumping the date.

## Steps

1. If the category has a background guide (usually in another section),
   make sure it exists first — recommendations link to concepts, not
   re-explain them.
2. Create `src/recommendations/<category>.md` with normal frontmatter
   (`adding-a-page.md`).
3. Add to the Recommendations block in `src/_data/nav.json`.
4. `npm test`, PR. Recommendation changes should get a second reviewer.
