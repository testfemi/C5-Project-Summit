import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.jobserve.com', // Set the base URL for your tests
  
    specPattern: "cypress/e2e/**/*.feature", // Define where to find your feature files
    supportFile: false, // Set to false if you don't use a supportFile
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // Add the Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Configure the file preprocessor using esbuild with the Cucumber plugin
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // Return the modified configuration
      return config;
    },
    env: {
      username: "femi.adeyinka@outlook.com", // Your test environment username
      password: "Nokia@123", // Your test environment password
      loginUrl: 'https://www.jobserve.com/gb/en/Candidate/Login.aspx?url=F854338061C29B5A2B893F63B22862E2', // Example additional environment variable if needed

    },
  },
});
