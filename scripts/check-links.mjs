// Checks internal links, anchors, and asset references in the built site.
// Run after a build: npm run build && npm run check-links
// External links are collected and listed with --list-external, but not
// fetched; network checks are intentionally out of scope for CI stability.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, posix } from "node:path";

const SITE = "_site";
const listExternal = process.argv.includes("--list-external");

// When the site is built with a path prefix (GitHub Pages project site),
// internal URLs start with the prefix but files in _site/ do not.
const rawPrefix = process.env.PATH_PREFIX || "/";
const PREFIX = rawPrefix === "/" ? "" : rawPrefix.replace(/\/+$/, ""); // "/privacy-cookbook"

if (!existsSync(SITE)) {
  console.error(`No ${SITE}/ directory. Run "npm run build" first.`);
  process.exit(1);
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (entry.endsWith(".html")) files.push(full);
  }
  return files;
}

const ATTR_RE = /(?:href|src)="([^"]+)"/g;
const ID_RE = /\bid="([^"]+)"/g;

const idCache = new Map();
function idsFor(file) {
  if (!idCache.has(file)) {
    const ids = new Set();
    const html = readFileSync(file, "utf8");
    let m;
    while ((m = ID_RE.exec(html))) ids.add(m[1]);
    idCache.set(file, ids);
  }
  return idCache.get(file);
}

function targetFile(urlPath) {
  // /foo/bar/ -> _site/foo/bar/index.html ; /foo.css -> _site/foo.css
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  if (clean.endsWith("/")) return join(SITE, clean, "index.html");
  const direct = join(SITE, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  return join(SITE, clean, "index.html");
}

const errors = [];
const external = new Set();
let checked = 0;

for (const file of walk(SITE)) {
  const rel = relative(SITE, file).replaceAll("\\", "/");
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = ATTR_RE.exec(html))) {
    const url = m[1];
    if (/^(https?:)?\/\//.test(url)) {
      external.add(url);
      continue;
    }
    if (/^(mailto:|tel:|data:)/.test(url)) continue;

    const [path, fragment] = url.split("#");
    checked++;

    if (path === "") {
      // same-page anchor
      if (fragment && !idsFor(file).has(fragment)) {
        errors.push(`${rel}: broken anchor "#${fragment}"`);
      }
      continue;
    }

    if (!path.startsWith("/")) {
      // relative links are not used by this site's templates; resolve anyway
      const base = posix.dirname("/" + rel);
      const resolved = posix.resolve(base, path);
      if (!existsSync(targetFile(resolved))) {
        errors.push(`${rel}: broken relative link "${url}"`);
      }
      continue;
    }

    let sitePath = path;
    if (PREFIX) {
      if (sitePath === PREFIX || sitePath === `${PREFIX}/`) {
        sitePath = "/";
      } else if (sitePath.startsWith(`${PREFIX}/`)) {
        sitePath = sitePath.slice(PREFIX.length);
      } else {
        errors.push(`${rel}: link missing path prefix "${url}"`);
        continue;
      }
    }

    const target = targetFile(sitePath);
    if (!existsSync(target)) {
      errors.push(`${rel}: broken link "${url}"`);
      continue;
    }
    if (fragment && target.endsWith(".html") && !idsFor(target).has(fragment)) {
      errors.push(`${rel}: broken anchor "${url}"`);
    }
  }
}

if (listExternal) {
  console.log(`\nExternal URLs referenced (${external.size}):`);
  for (const u of [...external].sort()) console.log(`  ${u}`);
}

if (errors.length > 0) {
  console.error(`\nLink check failed with ${errors.length} error(s):\n`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

console.log(
  `Link check passed: ${checked} internal references verified, ${external.size} external URLs (not fetched).`
);
