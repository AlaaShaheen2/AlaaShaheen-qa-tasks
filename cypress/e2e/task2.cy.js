it("Task2", () => {
  //to visit the website
  cy.visit("/checkout/#shipping");
  //to type inside the search bar shirt by ID
  cy.get("#search").type("shirt");
  //click on search bar by class
  cy.get(".action.search").click();
  //to click on the block that contain the shirt
  cy.get(".products > :nth-child(2)").click();
  //click on M size by attribute
  cy.get("[option-label=M]").click();
  //click on gray color by attribute
  cy.get("[option-label=Gray]").click();
  // add to cart the shirt by ID
  cy.get("#product-addtocart-button").click();
  cy.wait(5000);
  // click on cart link to go inside the page to checkout by class
  cy.get(".showcart").click();
  cy.get("#top-cart-btn-checkout").click();
  cy.wait(5000);
  //get thte title by ID and class
  cy.get("#shipping .step-title");
  //get the email field and type email by ID
  cy.get("#customer-email-fieldset #customer-email").type("a@gmail.com");
  // get password field and type the pass
  cy.get("#customer-password").type("Test1123");
  // to select login button and click on it
  cy.get(".login.primary").click();
  cy.wait(5000);
  //get the name field and type firstname by attribute
  cy.get("[name=firstname]").type("Alaa");
  //get the lastname field and type lastname by attribute
  cy.get("[name=lastname]").type("Shaheen");
  //get the companyname field and type companyname by attribute
  cy.get("[name=company]").type("Knowledge Academy ");
  //get the street field and type streetname by attribute
  cy.get('[name="street[0]"]').type("Jerusalem ");
  //get the street  field and type streetname
  cy.get('[name="street[1]"]').type("Jerusalem ");
  //get the street attribute field and type streetname
  cy.get('[name="street[2]"]').type("Jerusalem ");
  //get the city field and type cityname
  cy.get('[name="city"]').type("Jerusalem ");
  //get the region_id attr field and type cityname
  cy.get('[ name="region_id"]');
  //get the postcode attr field and type postcode
  cy.get('[name="postcode"]').type("+972000");
  //get country by ID
  cy.get('[name="country_id"]');
  //get phone field anf fill it by attribute
  cy.get(' [name="telephone"]').type("+97200000000");
  // find the section Shipping Methods and select first part
  cy.get("tbody > :nth-child(1)");
  // Select the  radio button by nth-child
  cy.get("tbody > :nth-child(1) > :nth-child(1)");
  cy.get('[name="ko_unique_3"]').check();
  // Select the price  by nth-child
  cy.get("tbody > :nth-child(1) > :nth-child(2)");
  // Select the Table Rate  by nth-child
  cy.get("tbody > :nth-child(1) > :nth-child(3)");
  // Select the Best way  by nth-child
  cy.get("tbody > :nth-child(1) > :nth-child(4)");
  // Select the second radio button by nth-child
  cy.get("tbody > :nth-child(2)");
  // Select the  radio button by nth-child
  cy.get("tbody > :nth-child(2) > :nth-child(1)");
  // Select the price  by nth-child
  cy.get("tbody > :nth-child(2) > :nth-child(2)");
  // Select the Fixed by nth-child
  cy.get("tbody > :nth-child(2) > :nth-child(3)");
  // Select the Flate Rate by nth-child
  cy.get("tbody > :nth-child(2) > :nth-child(4)");
  // to show Order Summary by class dirct child
  cy.get(".block>.title").click();
  //to get the next button and cick on it by attribute
  cy.get('[data-role="opc-continue"]').click();
});
