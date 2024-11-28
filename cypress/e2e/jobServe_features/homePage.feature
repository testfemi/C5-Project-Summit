Feature: Jobserve Homepage Interaction

  Background:
    Given the user navigates to the Jobserve Login page
    When I type the configured username and password
    And I click the Sign in button on Jobserve
    Then I should be logged in successfully

@HomePage @TC003 @Regression @Smoke
  Scenario: Navigating to Job Search and Editing Search
    When I click on the Job Search menu
    And I click on the Edit Search link
   
