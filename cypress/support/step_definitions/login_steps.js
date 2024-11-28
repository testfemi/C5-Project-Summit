import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

Given('the user navigates to the Jobserve Login page', () => {
  loginPage.visit();
});

When('I type the configured username and password', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
});

When('I type the configured username and an invalid password', () => {
  const username = Cypress.env('username');
  loginPage.fillUsername(username);
  loginPage.fillPassword('incorrect_passwo77777777777rd'); 
});

When('I type the "{string}" and "{string}" as credentials', (username, password) => {
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
});

When('I click the Sign in button on Jobserve', () => {
  loginPage.signIn();
});

Then('I should be logged in successfully', () => {
  loginPage.verifySuccessfulLogin();
});

Then('I should see an error message {string}', (errorMessage) => {
  loginPage.verifyLoginError(errorMessage);
});
