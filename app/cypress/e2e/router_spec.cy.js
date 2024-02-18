describe('test navigating through the website urls', function() {
    
    // Before each, visit website and log in 
    beforeEach(()=> {
      
        cy.visit('http:localhost:3000');
        cy.get('input[name="username"]').type('mohdsm');
        cy.get('input[name="password"]').type('m1234567890');
        cy.get('button[type="submit"]').click();

    })

    describe('check that user is taken to home page', () => {
     
      it('should allow user to login', ()=> {
        
        cy.wait(3000);
       
        // Check that the user sees the welcome message on the home page 
        cy.contains('Welcome Back').should('be.visible');

        // Visit the Profile page
        cy.visit('http://localhost:3000/profile');
        //Verify the url is correct
        cy.url().should('include', 'http://localhost:3000/profile');

        // Visit the record page
        cy.visit('http://lcoalhost:3000/record');
        //Verify the url is correct
        cy.url().should('include', 'http://lcoalhost:3000/record');


        // Visit the about page
        cy.visit('http://lcoalhost:3000/about');
        //Verify the url is correct
        cy.url().should('include', 'http://lcoalhost:3000/about');
        
        
        //
      })
    })



  })