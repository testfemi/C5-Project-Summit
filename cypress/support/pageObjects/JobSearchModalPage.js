class JobSearchModalPage {
    constructor() {
        this.keywordsInput = '#txtKeyWords';
        this.locationsInput = '#txtLocations';
        this.excludeAppliedCheckbox = '#chkExcludeApps';
        this.distanceSelect = '#selRad';
        this.searchButton = '#RunMainSearch';
    }

    enterKeywords(keywords) {
        cy.get(this.keywordsInput)
          .clear()  
          .type(keywords);
    }

    enterLocation(location) {
        cy.get(this.locationsInput)
          .clear()  
          .type(location);
    }

    toggleExcludeApplied(shouldExclude) {
        cy.get(this.excludeAppliedCheckbox).then($checkbox => {
            if (shouldExclude && !$checkbox.is(':checked') || !shouldExclude && $checkbox.is(':checked')) {
                cy.wrap($checkbox).click();
            }
        });
    }

    selectDistance(distance) {
        cy.get(this.distanceSelect).select(distance);
    }

    submitSearch() {
        cy.get(this.searchButton).click();
    }
}

export default JobSearchModalPage;
