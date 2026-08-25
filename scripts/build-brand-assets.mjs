// One-off brand asset generator. Not part of the regular build.
//
// Usage:
//   npm install --no-save sharp
//   node scripts/build-brand-assets.mjs
//
// Reads the master logo from media/ and regenerates the favicons, header
// mark, and social preview card committed under src/assets/img/.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "media/nobg_pigeon_logo.png";
const OUT = "src/assets/img";
const PAPER = "#f5f3ee";
const INK = "#24292f";
const MUTED = "#5b6570";
const ACCENT = "#3d5a75";

mkdirSync(OUT, { recursive: true });

// Header/home mark: reasonable size, transparent background.
await sharp(SRC).resize({ width: 260 }).png().toFile(`${OUT}/pigeon.png`);
await sharp(SRC).resize({ width: 64 }).png().toFile(`${OUT}/pigeon-64.png`);

// Favicons: pigeon on paper background (small transparent icons read badly
// in dark browser chrome, so give them the paper tile).
async function favicon(size, file) {
  const inner = Math.round(size * 0.84);
  const glyph = await sharp(SRC)
    .resize({ height: inner, fit: "inside" })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: PAPER,
    },
  })
    .composite([{ input: glyph, gravity: "centre" }])
    .png()
    .toFile(`${OUT}/${file}`);
}

await favicon(32, "favicon-32.png");
await favicon(180, "favicon-180.png");
await favicon(192, "favicon-192.png");

// Social preview card, 1200x630.
const cardText = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}"/>
  <text x="80" y="270" font-family="Georgia, serif" font-size="72"
        font-weight="bold" fill="${INK}">The Privacy</text>
  <text x="80" y="360" font-family="Georgia, serif" font-size="72"
        font-weight="bold" fill="${INK}">Cookbook</text>
  <text x="80" y="440" font-family="Georgia, serif" font-size="30"
        fill="${MUTED}">A practical field guide to digital privacy</text>
  <text x="80" y="482" font-family="Georgia, serif" font-size="30"
        fill="${MUTED}">and operational security.</text>
  <rect x="80" y="520" width="120" height="6" fill="${ACCENT}"/>
</svg>`;

const pigeonLarge = await sharp(SRC)
  .resize({ height: 480, fit: "inside" })
  .png()
  .toBuffer();

await sharp(Buffer.from(cardText))
  .composite([{ input: pigeonLarge, left: 740, top: 90 }])
  .png()
  .toFile(`${OUT}/social-card.png`);

console.log("Brand assets written to", OUT);
