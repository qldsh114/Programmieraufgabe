# Cypress E2E Tests – Spring PetClinic


This repository contains end-to-end tests written in **Cypress with TypeScript** for the [Spring PetClinic](https://github.com/spring-projects/spring-petclinic) web application. The project uses a Page Object Model approach with helper functions defined in `MyLinks.ts`.

---

## Folder Structure

cypress/
├── e2e/
│ ├── pages/
│ │ └── MyLinks.ts # Page object / helper methods
│ └── Test/
│ ├── Test_01_Search_for_an_Owner.cy.ts
│ ├── Test_02_Create_Owner.cy.ts
│ ├── Test_03_Add_a_New_Pet_to_an_Owner.cy.ts
│ └── Test_04_Add_Visit_to_Pet.cy.ts

## Test Cases
### 1. Test_01_Search_for_an_Owner.cy.ts
- Search for an existing owner by last name
- Search for a non-existent owner and assert error message

### 2. Test_02_Create_Owner.cy.ts
- Add a new owner with valid inputs
- Validate error messages when form fields are empty

### 3. Test_03_Add_a_New_Pet_to_an_Owner.cy.ts
- Add a new pet to an existing owner using a dynamic name
- Confirm pet appears on the owner detail page

### 4. Test_04_Add_Visit_to_Pet.cy.ts
- Add a new visit to an existing pet
- Verify visit details are saved and displayed

## Run Tests
# 1. Start Spring Boot backend
java -jar target/*.jar

# 2. In a new terminal: run Cypress GUI
npx cypress open
