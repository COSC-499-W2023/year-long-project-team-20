describe('Login', function() {
  // Step 1: setup the application state
  beforeEach(()=> {
    cy.visit('http://localhost:3000');
  })
  describe('first visit', () => {
     it ('should display login component with sign in UI visible', () => {
      cy.get('div[data-amplify-authenticator]');
      cy.get('form[data-amplify-authenticator-signin]').should('be.visible');
    })
    
    it('should allow user to login', ()=> {
      // Step 2: Take an action (Sign in)
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('testuser1234');
      cy.get('button[type="submit"]').click();

      // wait once logged in for 3 second then check user sees welcome message on home page
      cy.wait(3000);
      cy.contains('Instant and Secure Video Sharing').should('be.visible');
    })
  })
})