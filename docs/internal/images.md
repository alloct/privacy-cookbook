# Images

## Adding an image to an article

1. Put the file in `src/assets/img/`, lowercase-hyphenated:
   `src/assets/img/dns-settings-android.png`
2. Reference it with an absolute path and real alt text:

   ```markdown
   ![Android Private DNS settings screen with hostname field](/assets/img/dns-settings-android.png)
   ```

   The path prefix for GitHub Pages is applied automatically at build time.

## Requirements

- **Alt text is mandatory** and must describe what the image conveys, not
  restate the caption. Decorative images use `alt=""` (rare in this site).
- **Strip metadata before committing.** We publish a guide on EXIF leaks;
  our own repository must not leak author or location data.
  `exiftool -all= image.png` or a screenshot-crop. Screenshots: crop out
  usernames, tabs, notification bars.
- **Optimize size.** Prefer PNG for UI screenshots, JPEG for photos, SVG
  for diagrams. Keep files under ~200 KB; resize to the display width you
  need (article body is ~700 px wide; 1400 px covers 2× displays).
- **No hotlinking, ever.** Every image is committed to the repository — the
  CSP (`img-src 'self'`) will block external images at the browser anyway.
- Don't commit stock photos or decorative filler. Images earn their place
  by conveying information.

## Brand assets

`src/assets/img/` contains generated brand files (favicons, `pigeon*.png`,
`social-card.png`). They are produced from `media/nobg_pigeon_logo.png` by:

```bash
npm install --no-save sharp
node scripts/build-brand-assets.mjs
```

`sharp` is deliberately not a project dependency (it's a native binary
only needed when the logo changes). Regenerate, review the output, commit.
