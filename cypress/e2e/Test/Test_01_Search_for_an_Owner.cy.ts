import { MyLinks } from "../pages/MyLinks"

const myLinks = new MyLinks()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});


describe('Test_01_Search_for_an_Owner', () => {
    // Test: Search for an existing pet owner
    it('Search for an Owner', () => {

        cy.clearCookies(); // Clear browser cookies to ensure a clean test state
        myLinks.goToShop(); // Navigate to home page
        myLinks.clickFindOwners(); // Click on the "Find Owners" navigation link
        myLinks.searchLastname().type('Franklin', { delay: 50 }); // Enter an existing last name "Franklin"
        myLinks.clickButtonFindOwner(); // Click the "Find Owner" button to start the search

        // Assert that the result page shows the owner's information and fields are visible
        cy.contains('Name').should('be.visible');
        cy.contains('George Franklin').should('be.visible');
        cy.contains('Address').should('be.visible');
        cy.contains('110 W. Liberty St.').should('be.visible');

    }
    )
    // Test: Search for a non-existing pet owner
    it('Search for an not-existing owner', () => {

        cy.clearCookies(); // Clear cookies again to ensure no interference
        myLinks.goToShop(); // Navigate to the home page
        myLinks.clickFindOwners(); // Go to the "Find Owners" page
        myLinks.searchLastname().type('non-existing', { delay: 50 }); // Type a non-existent last name
        myLinks.clickButtonFindOwner();
        // Assert that a "not found" message appears
        cy.contains('has not been found').should('be.visible');
    });

})
