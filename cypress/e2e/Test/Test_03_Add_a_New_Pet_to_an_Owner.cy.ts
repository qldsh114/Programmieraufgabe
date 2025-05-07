import { MyLinks } from "../pages/MyLinks"

const myLinks = new MyLinks()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});


describe('Test_03_Add_a_New_Pet_to_an_Owner', () => {
    // Test: add a new pet for a existing Owner
    it.only('add a new pet', () => {
        const randomName = `Hugo_${Date.now()}`; // Generate a unique pet name to avoid duplication
        cy.clearCookies(); // Clear browser cookies to ensure a clean test state
        myLinks.goToShop(); // Navigate to home page
        myLinks.clickFindOwners(); // Click on the "Find Owners" navigation link
        myLinks.searchLastname().type('Franklin', { delay: 50 }); // Enter an existing last name "Franklin"
        myLinks.clickButtonFindOwner(); // Click the "Find Owner" button to start the search
        myLinks.clickButtonaddNewPet(); // Click on "Add New Pet"
        // Fill out the new pet form
        cy.get('#name').type(randomName); // Type a unique pet name
        cy.get('#birthDate').type('2019-08-25'); // Set birth date
        cy.get('select[name="type"]').select('dog'); // Select pet type from dropdown
        cy.get('button[type="submit"]').click(); // Submit the form
        // Verify that the newly added pet appears in the table
        cy.get('table').should('contain.text', randomName);
    }
    )
})
