import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PageManager from '../pageObjects/PageManager';

const pageManager = new PageManager();
const homePage = pageManager.getHomePage();
const jobSearchModalPage = pageManager.getJobSearchModalPage();
const jobserveGenericPage = pageManager.getJobserveGenericPage();


Given('I am on the Jobserve Homepage', () => {
  homePage.visit();
});

When('I click on the Job Search menu', () => {
  homePage.clickJobSearchMenu();
});

When('I click on the Edit Search link', () => {
  homePage.clickEditSearchLink();
});

When('I enter the following information on the Jobsearch Modal', dataTable => {
  dataTable.hashes().forEach(row => {
    switch (row.Field) {
        case 'Keywords':
            jobSearchModalPage.enterKeywords(row.Value);
            break;
        case 'Locations':
            jobSearchModalPage.enterLocation(row.Value);
            break;
        case 'Exclude applied':
            jobSearchModalPage.toggleExcludeApplied(row.Value.toLowerCase() === 'true');
            break;
        case 'Distance':
            jobSearchModalPage.selectDistance(row.Value);
            break;
    }
  });
});

When('I click the Search button', () => {
  jobSearchModalPage.submitSearch(); 
});

When('I click the first 15 Jobs from the search results', () => {
  jobserveGenericPage.clickFirst15JobsAndAddToBasket();
});

When('I click on View Basket', () => {
  jobserveGenericPage.viewBasket();
});

When('I click Apply Now Button', () => {
  jobserveGenericPage.applyNowJobs();
});

When('I click Apply Button', () => {
  jobserveGenericPage.applyjob();
});

Then('I verify the jobs have been submitted', () => {
  jobserveGenericPage.verifyApplicationSubmission();
});