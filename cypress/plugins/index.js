const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = (on, config) => {
  addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', createEsbuildPlugin(config));
  return config;
};
