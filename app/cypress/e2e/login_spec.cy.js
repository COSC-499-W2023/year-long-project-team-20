describe('Login', function() {
  // Step 1: setup the application state
  beforeEach(()=> {
    cy.visit('https://www.cosc499team20.com');
  })
  describe('first visit', () => {
     it ('should display login component with sign in UI visible', () => {
      cy.get('div[data-amplify-authenticator]');
      cy.get('form[data-amplify-authenticator-signin]').should('be.visible');
    })
    
    it('should allow user to login', ()=> {
      // Step 2: Take an action (Sign in)
      cy.get('input[name="username"]').type('mohdsm');
      cy.get('input[name="password"]').type('m1234567890');
      cy.get('button[type="submit"]').click();

      // wait once logged in for 3 second then check signout button is visible and click it
      cy.wait(3000);
      cy.get('.amplify-button').contains('Sign Out').should('be.visible');
      cy.get('.amplify-button').contains('Sign Out').click();
    })
  })
})