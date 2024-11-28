class LoginPage {
    constructor() {
        this.signInButtonSelector = "#signInButton";
        this.userNameSelector = "#txbEmail";
        this.passwordSelector = "#txbPassword";
        this.loginButtonSelector = '#btnlogin';
        this.errorMessageSelector = '#lblMessage'; 
        this.dashboardIdentifier = '#mnuDashboard > a'; 
        this.cookieConsentButtonSelector = '#RightSide > #PolicyOptInLink'; 
    }
  
    visit() {
        cy.visit(Cypress.env('loginUrl'));
        this.handleCookieConsent();
    }
  
    handleCookieConsent() {
        
        cy.get('body').then($body => {
            if ($body.find(this.cookieConsentButtonSelector).length) {
   
                cy.get(this.cookieConsentButtonSelector).should('be.visible').click({force: true});
            }
        });
    }
  
    fillUsername(username) {
        cy.get(this.userNameSelector).type(username);
    }
  
    fillPassword(password) {
        cy.get(this.passwordSelector).type(password);
    }

  
    signIn() {
        cy.get(this.loginButtonSelector).click();
    }

    verifySuccessfulLogin() {
        cy.get(this.dashboardIdentifier, { timeout: 10000 }) 
        .should('be.visible'); 
    }



    verifyLoginError(expectedMessage) {
        cy.get(this.errorMessageSelector, { timeout: 10000 })
          .should('be.visible')
          .and('contain.text', expectedMessage);
    }
}
export default LoginPage;
