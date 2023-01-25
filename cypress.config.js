const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://app.clickup.com",
    excludeSpecPattern:
      ("**/1-getting-started/*.js", "**/2-advanced-examples/*.js"),
  },
});
