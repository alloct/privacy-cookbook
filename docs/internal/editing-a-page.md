# Editing a Page

## Small fixes (typos, broken links, outdated details)

1. Edit the Markdown file under `src/<section>/`.
2. **Do not bump `last_reviewed`** for cosmetic fixes — that date means "a
   human re-verified this page's claims," not "someone touched the file."
3. `npm test`, commit, PR.

Every page's footer has a "Suggest an edit" link that opens the file in
GitHub's editor — useful for drive-by contributors.

## Substantive edits (claims, recommendations, new material)

1. Make the change, keeping the page's structure and voice
   (`content-guide.md`).
2. Re-verify neighboring claims while you're there — if a page was wrong
   about one thing, check its citations.
3. Update `last_reviewed` to today **only if** you actually re-verified the
   page as a whole; otherwise leave it and note the partial update in the
   PR description.
4. If your edit invalidates other pages (e.g., a tool changed ownership),
   search for cross-references: `grep -r "tool-name" src/`.

## Marking a page for review

If you notice a page is probably outdated but can't fix it now, change its
status:

```yaml
status: needs-review
```

Readers see a badge; `npm run find-stale` and status greps surface it for
maintainers.

## Retiring a page

- **Deprecated** (advice superseded but page has context value): set
  `status: deprecated`, add a callout at the top linking the replacement.
- **Archived** (kept only for the record): `status: archived`, remove from
  `nav.json`.
- **Moved:** create the new page, turn the old file into a stub whose body
  is one line linking the new location. Don't break URLs that may be
  bookmarked or linked externally.

## Renaming a page's title

Safe — the URL comes from the filename, not the title. Renaming the *file*
changes the URL: avoid it for published pages, or leave a stub (above).
Remember to update the matching `title` in `nav.json`.
