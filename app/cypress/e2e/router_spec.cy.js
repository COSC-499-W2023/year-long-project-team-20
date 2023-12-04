describe('test navigating through the website urls', function() {
    
    // Before each, visit website and log in 
    beforeEach(()=> {
      
        cy.visit('https://www.cosc499team20.com');
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
        cy.visit('https://www.cosc499team20.com/profile');
        //Verify the url is correct
        cy.url().should('include', 'https://www.cosc499team20.com/profile');

        // Visit the record page
        cy.visit('https://www.cosc499team20.com/record');
        //Verify the url is correct
        cy.url().should('include', 'https://www.cosc499team20.com/record');


        // Visit the about page
        cy.visit('https://www.cosc499team20.com/about');
        //Verify the url is correct
        cy.url().should('include', 'https://www.cosc499team20.com/about');
        
        
        //
      })
    })



  })