
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
    //click the confirm button in the alert
    cy.get('.swal2-confirm').click();
    //click the ok button in the wait alert
    cy.get('.swal2-confirm').click();

    //wait for 10 seconds
    cy.wait(10000);
    //click the ok buttom in the success alert
    cy.get('.swal2-confirm').click();

    //check if the video is visible in Library
    cy.visit('http://localhost:3000/library');
    cy.wait(5000);
    
    //check if the video is visible in the library
    let found = false;
    cy.get('video > source').each(($el, index, $list) => {
      if ($el.attr('src').includes('testVideo.mp4')) {
        found = true;
      }
    }).then(() => {
      expect(found).to.be.true;
    });
  })
})