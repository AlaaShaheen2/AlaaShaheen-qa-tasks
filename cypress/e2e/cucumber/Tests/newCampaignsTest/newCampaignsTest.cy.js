import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user click on promotions area", () => {
  cy.contains("Promotions").click();
});

Given("The user click on campaigns button", () => {
  cy.contains("Campaigns").click();
});

When("Click on Add New button", () => {});

When("Enter name in name input field", () => {});

When("Enter subject in subject input field", () => {});

When("Enter body in body field", () => {});

When("Click on Save button ", () => {});

Then("The new campaigns should be added successfully", () => {});
