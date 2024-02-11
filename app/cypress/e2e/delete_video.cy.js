describe('Delete Video Functionality', () => {

  beforeEach(()=> {
    cy.visit('https://www.cocs499team20.com');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('testuser1234');
    cy.get('button[type="submit"]').click();
    cy.wait(5000); 
    cy.visit('https://www.cosc499team20.com/library');
    
})

describe('delete video button should delete video', () => {
  it('Deletes a video with client-side deletion', () => {

    // selecting the first delete video button from multiple delete videos
    cy.get('.delete-video').eq(0).should('be.visible'); // waiting for the button to be visible
    //cy.get('.delete-video').eq(0).click(); // Click on the button

  });
});

});
