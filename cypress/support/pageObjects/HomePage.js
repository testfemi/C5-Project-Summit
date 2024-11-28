class HomePage {
    constructor() {
        this.jobSearchMenuSelector = '#mnuJobSearch > a';
        this.editSearchLinkSelector = '#amendsearch';
    }
  
    
    clickJobSearchMenu() {
        cy.get(this.jobSearchMenuSelector).click();
    }
  
    clickEditSearchLink() {
        cy.get(this.editSearchLinkSelector).click();
    }

}

export default HomePage;
