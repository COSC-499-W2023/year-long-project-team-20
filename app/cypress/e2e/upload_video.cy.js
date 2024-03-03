
//test script for testing upload
describe ('Upload Video',()=>{
  //logs into test account and navigates to upload page
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name ="password"]').type('testuser1234');
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.visit('http://localhost:3000/upload');
  })

  it('chooses file and uploads a test video', ()=>{
    
    // first check if the select file and download button is visible
    cy.get('[data-testid="uploadVideo"]').should('be.visible');
    cy.get('[data-testid="chooseFile"]').should('be.visible');

  
    // simulate upload process in this section
    
    cy.fixture('testVideo.mp4').then(fileContent =>{ //cy.fixture takes a file as parameter that is located inside the fixtures folder
      cy.get('[data-testid="chooseFile"]').attachFile({ // select the choose file input button and call the attachFile method
        fileContent: fileContent,
        fileName: 'testVideo.mp4',
        mimeType: 'video/mp4'
      })
    })

    // click upload button
    cy.get('[data-testid="uploadVideo"]').click();

     // Wait for the console log indicating that upload is completed
     cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })

    //
    cy.get('@consoleLog').should('be.calledWith', 'Successfully uploaded video') 
    // this concludes the test for now
    // test could be expanded to by navigating to the upload page and checking to see if the video that was uploaded is present


  })
})