// Validates frontmatter and content conventions for every Markdown page
// under src/. Run directly (`npm run validate`) or with --stale to list
// pages whose last_reviewed date is older than the review window.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { load as parseYaml } from "js-yaml";

const CONTENT_ROOT = "src";
const VALID_STATUSES = [
  "draft",
  "review",
  "published",
  "needs-review",
  "deprecated",
  "archived",
];
const STALE_AFTER_DAYS = 365;
const staleMode = process.argv.includes("--stale");

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "_includes" || entry === "_data" || entry === "assets") continue;
      walk(full, files);
    } else if (entry.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function parseFrontmatter(raw, file) {
  if (!raw.startsWith("---")) {
    return { error: "missing frontmatter block" };
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { error: "unterminated frontmatter block" };
  }
  try {
    return { data: parseYaml(raw.slice(3, end)) || {} };
  } catch (e) {
    return { error: `invalid YAML: ${e.message.split("\n")[0]}` };
  }
}

const errors = [];
const warnings = [];
const stale = [];
const now = Date.now();

for (const file of walk(CONTENT_ROOT)) {
  const rel = relative(".", file).replaceAll("\\", "/");
  const raw = readFileSync(file, "utf8");
  const { data, error } = parseFrontmatter(raw, file);

  if (error) {
    errors.push(`${rel}: ${error}`);
    continue;
  }

  if (!data.title) errors.push(`${rel}: missing "title"`);
  if (!data.description) {
    errors.push(`${rel}: missing "description"`);
  } else if (data.description.length > 300) {
    warnings.push(`${rel}: description longer than 300 characters`);
  }

  if (!data.status) {
    errors.push(`${rel}: missing "status"`);
  } else if (!VALID_STATUSES.includes(data.status)) {
    errors.push(
      `${rel}: invalid status "${data.status}" (expected one of: ${VALID_STATUSES.join(", ")})`
    );
  }

  if (data.tags && !Array.isArray(data.tags)) {
    errors.push(`${rel}: "tags" must be a list`);
  }

  if (data.status === "published" || data.status === "needs-review") {
    if (!data.last_reviewed) {
      errors.push(`${rel}: published pages require "last_reviewed" (YYYY-MM-DD)`);
    } else {
      const d = new Date(data.last_reviewed);
      if (Number.isNaN(d.getTime())) {
        errors.push(`${rel}: "last_reviewed" is not a valid date`);
      } else {
        const ageDays = Math.floor((now - d.getTime()) / 86400000);
        if (ageDays > STALE_AFTER_DAYS) {
          stale.push(`${rel}: last reviewed ${ageDays} days ago (${data.last_reviewed instanceof Date ? data.last_reviewed.toISOString().slice(0, 10) : data.last_reviewed})`);
        }
        if (d.getTime() > now + 86400000) {
          errors.push(`${rel}: "last_reviewed" is in the future`);
        }
      }
    }
  }
}

if (staleMode) {
  if (stale.length === 0) {
    console.log(`No pages older than ${STALE_AFTER_DAYS} days. Nothing is stale.`);
  } else {
    console.log(`Pages due for review (older than ${STALE_AFTER_DAYS} days):\n`);
    for (const s of stale) console.log(`  ${s}`);
    console.log(`\n${stale.length} page(s). Update content, then update last_reviewed.`);
  }
  process.exit(0);
}

for (const w of warnings) console.warn(`warning: ${w}`);

if (errors.length > 0) {
  console.error(`\nContent validation failed with ${errors.length} error(s):\n`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

console.log(
  `Content validation passed (${walk(CONTENT_ROOT).length} pages checked, ${warnings.length} warning(s), ${stale.length} stale).`
);
if (stale.length > 0) {
  console.log(`Note: ${stale.length} page(s) are due for review. Run "npm run find-stale".`);
}
