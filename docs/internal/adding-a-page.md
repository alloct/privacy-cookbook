# Adding a Page

Adding a normal article requires **no code changes**: one Markdown file and
one line of navigation JSON.

## Steps

1. **Create the file** in the section's directory:

   `src/accounts/hardware-keys.md`

   The filename becomes the URL: `/accounts/hardware-keys/`. Use lowercase
   hyphenated names.

2. **Add frontmatter and content:**

   ```markdown
   ---
   title: Hardware Security Keys
   description: What FIDO2 keys protect against and how to set them up
     without locking yourself out.
   tags:
     - authentication
     - mfa
   status: draft
   last_reviewed: 2026-08-24
   ---

   Opening paragraph...

   ## First heading

   Content...
   ```

   You do **not** set `layout` or `section` — the directory's
   `*.11tydata.json` supplies both automatically.

3. **Add it to navigation** in `src/_data/nav.json`, inside the section's
   `items` array:

   ```json
   { "title": "Hardware Security Keys", "url": "/accounts/hardware-keys/" }
   ```

   Order in the array is display order. The section index page lists the
   page automatically from this entry (with its `description`).

4. **Preview and validate:**

   ```bash
   npm run serve      # check it renders
   npm test           # frontmatter + build + links
   ```

5. Set `status: published` when it's reviewed (see `content-guide.md` for
   lifecycle rules), commit, open a PR.

## Notes

- A page can exist without a nav entry (reachable by URL and search only) —
  fine for stubs, unusual for real content.
- Images: see `images.md`. Style and sourcing rules: `content-guide.md`.
- Recommendations pages and Darwin Awards have their own templates:
  `adding-a-recommendation.md`, `adding-a-darwin-award.md`.
