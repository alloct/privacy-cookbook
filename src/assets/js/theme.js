// Theme toggle. The only JavaScript on regular pages.
// Stores a single preference key in localStorage; no cookies, no network.
(function () {
  var KEY = "theme";
  var root = document.documentElement;

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* storage unavailable (private mode, etc.): fall back to system theme */
  }
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    function render() {
      var theme = currentTheme();
      button.textContent = theme === "dark" ? "Light" : "Dark";
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }

    button.hidden = false;
    render();

    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(KEY, next);
      } catch (e) {
        /* ignore */
      }
      render();
    });
  });
})();
