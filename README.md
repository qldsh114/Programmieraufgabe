# Danone_Aptalclub_QA

## Login

- **Danone_Aptaclub_login.cy.ts**
  - Existing customers can log in
  - Newly registered customers can log in

## new comsomer register

- **Danone_Aptaclub_register_Form_fill_in.cy.ts**
  - neu costomer can register via 'Registrieren' Button and fill out the form, because of the reCAPTCHA can not finisch all steps.
  
## cart modification

- **Danone_Aptaclub_items_in_cart_increase_and_descrease.cy**
  - Customers can change the number of items in the shopping cart by increasing or decreasing the number of items in the shopping cart.
- **Danone_Aptaclub_delete_cart.cy.ts**
  - Customers can delete items in the shopping cart

## choose items in the shop

- **Danone_Aptaclub_choose_items.cy.ts**
  - Customers can select products in the shopping page.

## checkout

- **Danone_Aptaclub_Buy_Items._without_login.cy.ts**
  - Customers can make the checkout without login.
- **Danone_Aptaclub_Checkout_giropay.cy.ts**
  - Customers can make checkout via giropay.
- **Danone_Aptaclub_Checkout_Sofort.cy.ts**
  - Customers can make checkout via sofort.

## error message handling

- **Danone_Aptaclub_Error message wrong password.cy.ts**
  - there should be error message when the costomer gives the wrong password.


## Mobile Testing
- a lot of devices have been defined in ``/cypress.env.json`` and the viewports of the devices have been defined in ``/commands.ts``
- to run the specific device just use:  npx cypress open --env myDevice= device name e.g. ``npx cypress open --env myDevic=Iphone13Pro`` or any viewport via e.g. ``npx cypress open --env myDevice=500x600``.
- default viewport (1920, 1080)

## Notes
- log setup in ``/cypress.config.ts``  
- do not mix ``/commands.js`` and ``/commands.ts`` in typescript

