describe('Image Gallery', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays image cards with titles, images, and ratings', () => {
    cy.get('.image-card').should('have.length.greaterThan', 0);
    cy.get('.image-card').each((imageCard) => {
      cy.wrap(imageCard).find('img').should('exist');
      cy.wrap(imageCard).find('h3').should('exist');
      // cy.wrap(imageCard).find('select').should('exist');
    });
  });

  it('opens modal with image details when image card is clicked', () => {
    cy.get('.image-card').eq(0).click();

    cy.get('.modal').should('be.visible');
    cy.get('.modal img').should('exist');
    cy.get('.modal h2').should('exist');
    cy.get('.modal select').should('exist');
  });

  it('allows users to rate images in the modal', () => {
    cy.get('.image-card').eq(0).click();

    cy.get('.modal select').select('3').should('have.value', '3');
    cy.get('.modal select').select('4').should('have.value', '4');
  });

  it('closes modal when clicking outside the modal', () => {
    cy.get('.image-card').eq(0).click();

    cy.get('.modal-overlay').click('topRight');
    cy.get('.modal').should('not.exist');
  });

  it('does not close modal when clicking on the modal itself', () => {
    cy.get('.image-card').eq(0).click();

    cy.get('.modal').click();
    cy.get('.modal').should('be.visible');
  });
});
