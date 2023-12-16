/// <reference types="cypress" />
describe("Task#6", () => {
  beforeEach(() => {
    cy.visit("https://admin-demo.nopcommerce.com/");
    cy.loginNopcommerce();
    cy.wait(3000);
  });

  it("Verify that the user can search and delete ", () => {
    cy.get(".nav-sidebar > li:nth-child(2) > a").click();
    cy.wait(1000);
    cy.contains("Products").click();

    cy.get("#SearchProductName").clear().type("laptop");
    cy.get("#search-products").click();
    cy.wait(1000);
    cy.get(".checkboxGroups").check();
    cy.wait(1000);
    cy.get("#delete-selected").click();
    cy.contains("Are you sure you want ").should(
      "contain",
      "Are you sure you want to perform this action?"
    );
  });
});
