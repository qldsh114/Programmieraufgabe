
export class MyLinks {
   element = {

      toShop: () => cy.visit("http://localhost:8080/"),
      findOwners: () => cy.get('[class="fa fa-search"]'),
      lastName: () => cy.get('input[name="lastName"]'),
      buttonFindeOwner: () => cy.get('button[type="submit"]'),
      addNewPet: () => cy.get('a.btn.btn-primary').contains('Add New Pet')

   }


   goToShop() {
      this.element.toShop();
   }
   clickFindOwners() {
      this.element.findOwners().click();
   }
   searchLastname() {
      return this.element.lastName();
   }
   clickButtonFindOwner() {
      this.element.buttonFindeOwner().click();
   }
   clickButtonAddOwner() {
      cy.contains('Add Owner').click();
   }
   formFillNewOwner() {
      cy.get('#firstName').type('Test');
      cy.get('#lastName').type('Tschin');
      cy.get('#address').type('Test Street 1');
      cy.get('#city').type('TestCity');
      cy.get('#telephone').type('1234567890');
      cy.get('button[type="submit"]').click();
   }
   clickButtonaddNewPet() {
      this.element.addNewPet().click();
   }

}


