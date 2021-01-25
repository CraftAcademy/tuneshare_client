describe('This is a tes', () => {
  it('to see if Cypress works', () => {
    cy.visit('/')
    cy.get('body').should('contain', 'TuneShare')
  });
});