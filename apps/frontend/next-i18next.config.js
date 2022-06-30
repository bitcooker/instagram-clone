const path = require("path");

module.exports = {
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development" ? true : false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"]
  }
};
