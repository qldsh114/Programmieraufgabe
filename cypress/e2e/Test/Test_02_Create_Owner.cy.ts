import { MyLinks } from "../pages/MyLinks"

const myLinks = new MyLinks()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});


describe('Test_02_Create_Owner', () => {
    // Test: Successfully add a new owner
    it('Search for an Owner', () => {
        cy.clearCookies(); // Clear cookies to start with a clean state
        myLinks.goToShop(); // Navigate to the homepage
        myLinks.clickFindOwners(); // Click on the "Find Owners" navigation link
        myLinks.clickButtonAddOwner(); // Click the "Add Owner" button
        myLinks.formFillNewOwner(); // Fill out the form with valid owner details and submit
    }
    )
    // Test: Show validation error when fields are empty
    it('show error if fields are empt', () => {

        cy.clearCookies(); // Clear cookies again for a clean state
        myLinks.goToShop(); // Go to homepage
        myLinks.clickFindOwners(); // Click on the "Find Owners" navigation link
        myLinks.clickButtonAddOwner(); // Click "Add Owner" to open the form
        myLinks.clickButtonAddOwner(); // Try submitting without filling any fields
        // Assert that validation error messages appear
        cy.contains(' must not be blank').should('be.visible');
    });

})
