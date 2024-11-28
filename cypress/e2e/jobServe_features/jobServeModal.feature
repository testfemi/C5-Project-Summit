Feature: Jobserve Search Modal Interaction

  Background:
    Given the user navigates to the Jobserve Login page
    When I type the configured username and password
    And I click the Sign in button on Jobserve
    Then I should be logged in successfully
    When I click on the Job Search menu
    And I click on the Edit Search link

@JobserveModalPage @TC004 @Regression @Smoke
  Scenario: User performs a job search with specific criteria
    When I enter the following information on the Jobsearch Modal
      | Field            | Value               |
      | Keywords         | Automation Testing  |
      | Locations        | London              |
      | Exclude applied  | true                |
      | Distance         | Within 100 miles     |
    And I click the Search button

