import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user click on promotions area", () => {
  cy.contains("Promotions").click();
});

Given("The user click on affiliate button", () => {
  cy.contains("Affiliates").click();
});

When("Click on Add New button", () => {
  cy.get(".btn-primary").first().click();
});

When("Enter first name in first name input field", () => {
  cy.get("#Address_FirstName").clear().type("Alaa");
});

When("Enter last name in last name input field", () => {
  cy.get("#Address_LastName").clear().type("Shaheen");
});

When("Enter email in emial input field", () => {
  cy.get("#Address_Email").clear().type("a@gmail.com");
});

When("Select the country from country list", () => {
  cy.get("#Address_CountryId").select("Palestine");
});

When("Enter the name of the region in region field", () => {
  cy.get("#Address_County ").clear().type("Jerusalem");
});

When("Enter the name of the city in city field", () => {
  cy.get("#Address_City").clear().type("Jerusalem");
});

When("Enter address1 in address1 field", () => {
  cy.get("#Address_Address1").clear().type("Kofor-aqab");
});

When("Enter postal code in postal code field", () => {
  cy.get("#Address_ZipPostalCode").clear().type("+9720");
});

When("Enter Phone number in Phone number field", () => {
  cy.get("#Address_PhoneNumber").clear().type("0580000000");
});

When("Click on Save button", () => {
  cy.get("[name=save]").click();
});

Then("The new affiliate should be added successfully", () => {
  cy.get('.alert-dismissable').should("contain", "The new affiliate has been added successfully.")
});
