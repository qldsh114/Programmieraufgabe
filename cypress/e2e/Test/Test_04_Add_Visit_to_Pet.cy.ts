import { MyLinks } from "../pages/MyLinks"

const myLinks = new MyLinks()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});


describe('Test_04_Add_Visit_to_Pet', () => {
    // Test: Add_Visit_to_Pet for a existing Owner
    it.only('add a new pet', () => {
        cy.clearCookies(); // Clear browser cookies to ensure a clean test state
        myLinks.goToShop(); // Navigate to home page
        myLinks.clickFindOwners(); // Click on the "Find Owners" navigation link
        myLinks.searchLastname().type('Franklin', { delay: 50 }); // Enter an existing last name "Franklin"
        myLinks.clickButtonFindOwner(); // Click the "Find Owner" button to start the search
        // Click on the second "Add Visit" link (eq(1) assumes multiple pets or visits)
        cy.get('a[href$="/visits/new"]').eq(1).click();
        // Fill out the visit form
        cy.get('#description').type('visit my pet');
        cy.get('#date').type('2025-05-09');
        cy.get('button[type="submit"]').click();
        // Fill out the visit form
        cy.contains('visit my pet');
    }

    )
})
