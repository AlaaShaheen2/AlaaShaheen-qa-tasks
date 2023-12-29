import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
before(() => {
  cy.visit("https://admin-demo.nopcommerce.com/");
  cy.loginNopcommerce();
  cy.wait(3100);
});

Given("The user click on promotions area", () => {
  cy.contains("Promotions").click();
});

Given("The user click on discount button", () => {
  cy.contains("Discounts").click();
});

When("Click on Add New button", () => {
  cy.get(".btn-primary").first().click();
});

When("Enter name in name input field", () => {
  cy.get("#Name").type("week end discount");
});

When("Choose discount type from the list", () => {
  cy.get("[name=DiscountTypeId]").select(1);
});

When("Enter discount amount in discount amount field", () => {
  cy.get("#pnlDiscountAmount > .col-md-9 > .k-widget").clear().type("3");
});

When("Click on Save button", () => {
  cy.get("[name=save]").click();
});

Then("The new discount should be added successfully", () => {
  cy.get(".alert-dismissable").should(
    "contain",
    "The new discount has been added successfully"
  );
});
