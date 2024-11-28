Feature: Jobserve Login Functionality

  Background:
    Given the user navigates to the Jobserve Login page

  @loginSuccess @TC001 @Regression @Smoke
  Scenario: Test to verify User can Login with the correct Username and Password
    When I type the configured username and password
    And I click the Sign in button on Jobserve
    Then I should be logged in successfully

  @loginFailure @TC002 @Regression @Smoke
  Scenario: Test to verify User can login unsuccessfully
    When I type the configured username and an invalid password
    And I click the Sign in button on Jobserve
    Then I should see an error message "Either the email address or password is invalid"



