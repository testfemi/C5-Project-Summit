class JobserveGenericPage {
    constructor() {
      this.firstJob = "div.jobItem"; 
      this.addToBasketButton = "#td_addbskt_btn";
      this.basketLinkMini = "#basketExpanded > #basketLinkMini";
      this.applyNowButton = 'button:contains("Apply Now")';
      this.applyButton = '#btn1 img';
      this.applicationComplete = '#appCompletePanel';
      this.jobItemsSelector = 'div.jobItem'; 
      this.addToBasketButtonSelector = '#td_addbskt_btn'; 
    
    }
    clickFirst15JobsAndAddToBasket() {
     
      cy.get(this.jobItemsSelector)
          .should('have.length.at.least', 15)  
          .each(($job, index, $list) => {
              if (index < 15) {  
                  
                  cy.wrap($job).scrollIntoView().click({ force: true }).then(() => {
                      
                      cy.get(this.addToBasketButtonSelector).then($btn => {
                          if ($btn.is(':visible') && !$btn.hasClass('selected')) {
                          
                              cy.wrap($btn).click();
                              cy.log(`Job ${index + 1} added to basket`);
                          } else {
                             
                              cy.log(`Skipping Job ${index + 1}: Button not visible or already selected.`);
                          }
                      });
                  });
  
             
                  cy.wait(1000); 
              }
          });
  }
    viewBasket() {
      cy.get(this.basketLinkMini).click();
    }
  
    applyNowJobs() {
      cy.get(this.applyNowButton).each(($btn) => {
        cy.wrap($btn).click();
      });
      
    }

    applyjob() {
         cy.get(this.applyButton).click();
    }
  
    verifyApplicationSubmission() {
      cy.get(this.applicationComplete).should('contain.text', 'Your applications have been submitted.');
    }
  }
  
  export default JobserveGenericPage;
  