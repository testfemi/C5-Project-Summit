Feature: Jobserve Generic TesApplication process

  Background:
    Given the user navigates to the Jobserve Login page
    When I type the configured username and password
    And I click the Sign in button on Jobserve
    Then I should be logged in successfully

  @genericTesting @TC005 @Regression @Smoke
  Scenario: Click the first 15 Jobs from the search results
    When I click on the Job Search menu
    And I click on the Edit Search link
    When I enter the following information on the Jobsearch Modal
      | Field           | Value            |
      | Keywords        | Database Testing |
      | Locations       | London           |
      | Exclude applied | true             |
      | Distance        | Within 100 miles |
    And I click the Search button
    When I click the first 15 Jobs from the search results
    When I click on View Basket
    And I click Apply Now Button
    And I click Apply Button
    Then I verify the jobs have been submitted
