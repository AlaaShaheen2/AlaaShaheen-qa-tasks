import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user click on promotions area", () => {
  cy.contains("Promotions").click();
});

Given("The user click on campaigns button", () => {
  cy.contains("Campaigns").click();
});

When("Click on Add New button", () => {
  cy.get("a.btn.btn-primary").click();
});

When("Enter name in name input field", () => {
  cy.get("#Name").clear().type("Holiday");
});

When("Enter subject in subject input field", () => {
  cy.get("#Subject").clear().type("Holiday discounts");
});

When("Enter body in body field", () => {
  cy.get("#Body")
    .clear()
    .type("discount on different sections :Chocolate, Candy ,Drinks ... etc");
});

When("Click on Save button ", () => {
  cy.get("[name=save]").click();
});

Then("The new campaigns should be added successfully", () => {
  cy.get(".alert-dismissable").should(
    "contain",
    "The new campaign has been added successfully"
  );
});
