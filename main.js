const plugin = require("tailwindcss/plugin");
const hyphens = plugin(function ({ addUtilities }) {
  addUtilities({
    ".hyphens-auto": {
      hyphens: "auto",
    },
    ".hyphens-manual": {
      hyphens: "manual",
    },
    ".hyphens-none": {
      hyphens: "none",
    },
  });
});
module.exports = hyphens;
