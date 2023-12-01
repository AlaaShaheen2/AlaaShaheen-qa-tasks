it("Task4", () => {
  //to visit the website
  cy.visit("/");
  //to type inside the search bar shirt by ID
  cy.get("#search").type("shirt");
  //click on search bar by class
  cy.get(".action.search").click();
  //to click on the block that contain the shirt
  cy.get(".product-items").find("a").first().click();
  cy.wait(3000);
  //click on M size by attribute
  cy.get("[option-label=M]").click();
  //click on gray color by attribute
  cy.wait(3000);
  cy.get(".swatch-option.color").last().click();
  cy.wait(3000);
  cy.get("#qty").clear();
  cy.get("#qty").type(3);
  // add to cart the shirts by ID
  cy.get("#product-addtocart-button").click();
  cy.wait(5000);
});
