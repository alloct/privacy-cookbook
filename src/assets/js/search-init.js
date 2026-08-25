// Initializes the Pagefind UI on the search page only.
window.addEventListener("DOMContentLoaded", function () {
  if (typeof PagefindUI === "undefined") return;
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    autofocus: true,
  });
});
