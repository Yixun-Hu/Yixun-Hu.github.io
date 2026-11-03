module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // These classes are added at runtime by medium-zoom.
  safelist: ["medium-zoom-overlay", "medium-zoom-image--opened"],
};
