import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownItAnchor from "markdown-it-anchor";
import markdownItContainer from "markdown-it-container";
import markdownItFootnote from "markdown-it-footnote";

const CALLOUTS = [
  { name: "note", label: "Note" },
  { name: "tip", label: "Tip" },
  { name: "warning", label: "Warning" },
  { name: "danger", label: "Caution" },
];

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.amendLibrary("md", (md) => {
    md.set({ typographer: true });

    md.use(markdownItAnchor, {
      level: [2, 3, 4],
      permalink: markdownItAnchor.permalink.headerLink({
        safariReaderFix: true,
      }),
    });

    md.use(markdownItFootnote);

    for (const { name, label } of CALLOUTS) {
      md.use(markdownItContainer, name, {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const info = tokens[idx].info.trim().slice(name.length).trim();
            const title = md.utils.escapeHtml(info || label);
            return `<div class="callout callout--${name}" role="note"><p class="callout__label">${title}</p>\n`;
          }
          return "</div>\n";
        },
      });
    }
  });

  // Extract h2 headings from rendered HTML for the "On this page" list.
  eleventyConfig.addFilter("toc", (content) => {
    if (!content) return [];
    const headings = [];
    const re = /<h2[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g;
    let match;
    while ((match = re.exec(content))) {
      headings.push({
        id: match[1],
        text: match[2].replace(/<[^>]+>/g, "").trim(),
      });
    }
    return headings;
  });

  eleventyConfig.addFilter("pageByUrl", (all, url) =>
    all.find((p) => p.url === url)
  );

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("humanDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
