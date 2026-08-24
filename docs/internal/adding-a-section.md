# Adding a Section

A section is a top-level content area (like Accounts or OPSEC): a
directory, a data file, an index page, and a navigation block. About ten
minutes of work.

## Steps

Example: a new "Finance" section at `/finance/`.

1. **Create the directory:** `src/finance/`

2. **Create the directory data file** `src/finance/finance.11tydata.json`:

   ```json
   {
     "layout": "layouts/article.njk",
     "section": "Finance",
     "sectionUrl": "/finance/"
   }
   ```

   This gives every page in the directory its layout and breadcrumb
   automatically. The filename must match the directory name.

3. **Create the section index** `src/finance/index.md`:

   ```markdown
   ---
   title: Finance
   description: Payment privacy, banking, and financial data brokers.
   layout: layouts/section.njk
   status: published
   last_reviewed: 2026-08-24
   ---

   One or two short paragraphs framing the section.
   ```

   The `layout: layouts/section.njk` override makes the index list its
   child pages automatically (titles and descriptions come from nav.json +
   each page's frontmatter).

4. **Add the navigation block** in `src/_data/nav.json` at the position you
   want it to appear in the sidebar and home page:

   ```json
   {
     "title": "Finance",
     "url": "/finance/",
     "items": [
       { "title": "Payment Privacy", "url": "/finance/payments/" }
     ]
   }
   ```

5. **Add at least one real article** (`adding-a-page.md`). Don't ship empty
   sections — a section with one good page beats one with five stubs.

6. `npm test`, commit, PR.

## Notes

- Section order in `nav.json` is display order everywhere (sidebar, home
  grid).
- The home page and sidebar pick up new sections automatically; nothing
  else to edit.
- Renaming a section later changes URLs — avoid, or leave stub pages at the
  old paths.
