describe('Google Search Test for Eishockey Schläger', () => {
    beforeEach(() => {
        // Visit Google homepage
        cy.visit('https://www.google.com');
    });

    it('should search for Eishockey Schläger and display results', () => {
        // Accept cookies if the popup appears


        // Type search query and submit
        cy.get('textarea[name="q"]').type('Eishockey Schläger{enter}');


        // Verify that results are displayed
        cy.get('#search').should('be.visible');

        // Ensure that at least one result contains the search term
        cy.get('h3').first().should('contain.text', 'Eishockey');
    });
});
it('simple test', () => {
    
});
it('simple test2', () => {
    
})
it('test', () => {
    
})
