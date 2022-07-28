module.exports = {
  locales: ["en", "sr", "es", `fr`, "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["pages", "components"],
    },
  ],
  format: "po",
};
