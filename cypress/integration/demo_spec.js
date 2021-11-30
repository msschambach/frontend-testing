describe('App Test Suite', () => {

  it('Visits the app', () => {
    cy.visit('http://localhost:3000');

    const actionButton = cy.get('#display-action-button');

    actionButton.contains('Click me!');

    actionButton.click();

    cy.get('#display .display-text').should('contain', 'Welcome to wonderland!')
  })

})