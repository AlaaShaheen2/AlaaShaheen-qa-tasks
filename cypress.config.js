/// <reference types= "cypress" />

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    // experimentalStudio:true,
    // trashAssetsBeforeRuns:true,
    // screenshotOnRunFailure:true,
    experimentalStudio: true,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: false,
    screenshotsFolder: "MyScreenshots",
    video: false,
    videosFolder: "MyVideos",
    videoCompression: 0,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});
