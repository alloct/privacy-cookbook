export default {
  name: "The Privacy Cookbook",
  tagline: "A practical field guide to digital privacy and operational security.",
  // Absolute base URL of the deployed site, including any path prefix,
  // without a trailing slash. Set SITE_URL in CI for production builds.
  url: (process.env.SITE_URL || "http://localhost:8080").replace(/\/$/, ""),
  repo: "https://github.com/alloct/privacy-cookbook",
  license: {
    content: "CC BY-SA 4.0",
    contentUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    code: "MIT",
  },
};
