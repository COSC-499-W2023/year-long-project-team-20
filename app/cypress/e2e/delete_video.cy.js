describe('Delete Video Functionality', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('testuser1234');
    cy.get('button[type="submit"]').click();
    cy.wait(5000); 
    cy.visit('http://localhost:3000/library');
    
})

describe('Delete video button should delete video', () => {
  it('Deletes a video with client-side deletion', () => {

    // Ensure delete video button is visible
    cy.get('.delete-video').eq(0).should('be.visible');

    // Get the first video element
    cy.get('video').first().then(($video) => {

      // Store the source of the first video
      const oldSrc = $video.find('source').attr('src');

      cy.get('.delete-video').eq(0).click();

      // Click the confirm button in the alert
      cy.get('.swal2-confirm').click();

      cy.wait (5000);

      //click ok on the success alert
      cy.get('.swal2-confirm').click();

      // Wait for the page to reload (adjust the wait time according to your application's reload time)
      cy.visit('http://localhost:3000/library');

      cy.wait(5000);


      // Check if a video element exists
      cy.get('body').then(($body) => {
        if ($body.find('video').length > 0) {
          // If a video element exists, get the src attribute of the first video
          cy.get('video').first().then(($video) => {
            // Ensure the source of the new first video is different from the old one
            const newSrc = $video.find('source').attr('src');
            expect(newSrc).to.not.equal(oldSrc);
          });
        } else {
          // If no video element exists, the library is empty and the test passes
          cy.log('Library is empty');
        }
      });
    });
  });
});

});