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

      cy.wait (5000);

      // Wait for the page to reload (adjust the wait time according to your application's reload time)
      cy.visit('http://localhost:3000/library');

      cy.wait(5000);


      // Get the src attribute of the new first video after deletion
        cy.get('video').first().then(($video) => {
        // Ensure the source of the new first video is different from the old one
        const newSrc = $video.find('source').attr('src');
        expect(newSrc).to.not.equal(oldSrc);
      });
    });
  });
});

});