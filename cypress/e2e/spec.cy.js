describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Microsoft Azure Authentication (webapp)', () => {
  beforeEach(() => {
    cy.logIntoMicrosoft({
      username: Cypress.env('MICROSOFT_ONLINE_USERNAME'),
      password: Cypress.env('MICROSOFT_ONLINE_PASSWORD'),
      displayname: Cypress.env('MICROSOFT_ONLINE_NAME')
    });
  });

  after(() => {
    cy.logoutOfMicrosoft({ username: Cypress.env('MICROSOFT_ONLINE_USERNAME')});
    Cypress.session.clearAllSavedSessions();
  });
  
  it('checks header on the page', () => {
    cy.contains('View ID Token Claims').should('exist');
    cy.get('#welcome-banner').should('be.visible');
  });
  
  it('fails because session is restored', () => {
    cy.contains('View ID Token Claims').should('exist');
    cy.get('#welcome-banner').should('be.visible');
  });
});