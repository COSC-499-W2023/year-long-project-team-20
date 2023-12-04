
  describe('Test recording functionality', function() {
    
    // Before each, visit website, log in, and navigate to record video section
    beforeEach(()=> {
        cy.visit('http://localhost:3000/');
        cy.get('input[name="username"]').type('mohdsm');
        cy.get('input[name="password"]').type('m1234567890');
        cy.get('button[type="submit"]').click();
        cy.wait(5000); 
        cy.visit('http://localhost:3000/record');
        
    })

    describe('check that start, stop, play, and download are functional', () => {
        //Test that start and stop are enabled and disabled accordingly
        it('should start recording, stop recording, and play recording', () => {
            cy.wait(5000); 
            cy.get('.start-button').should('be.enabled').trigger("click");
            cy.wait(5000); 
            cy.get('.stop-button').should('be.enabled').click({ force: true });


         //Test that video gets played back
            cy.wait(5000); 
            cy.get('.play-button').should('be.enabled').click();
            cy.wait(5000); 
            cy.get('video').should('have.attr', 'src').and('not.be.empty');

        //Test that user is able to click upload and download video
        it('Check that save video and download video are enabled ', () => {
            cy.get('.upload-button').should('be.enabled') 
            cy.get('.download-button').should('be.enabled').click();
            cy.wait(100); 
            //check that video got downloaded 
            cy.readFile(record.mp4) 

            
        });
        
         
        });
        
   

  
      
    })



  })