import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import createAccountPageActions from "../../../../../pageObjects/createAccountPage/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";
import createAccountPageAssertions from "../../../../../pageObjects/createAccountPage/assertions.cy";
const firstName = "Alaa";
const lastName = "Shaheen";
const email = "alaashaheen" + Math.floor(Math.random() * 100) + "@gmail.com";
const url = "https://magento.softwaretestingboard.com/customer/account/";
const password = "test@123%6";
const confirmPassword = "test@123%6";
const value = "My Account";
const sharedAction = sharedActions();
const sharedAssertion = sharedAssertions();
const createAccountAction = createAccountPageActions();
const createAccountPageAssertion = createAccountPageAssertions();

Given("The user navigated to create account page", () => {
  sharedAction.openMagentoWebsite();
});

When("Type {string} in the field", (fieldName) => {
  switch (fieldName) {
    case "firstName":
      createAccountAction.typeInFirstNameInputField(firstName);
      break;
    case "lastName":
      createAccountAction.typeInLastNameInputField(lastName);
      break;
    case "email":
      createAccountAction.typeInEmailInputField(email);
      break;
    case "password":
      createAccountAction.typeInEmailInputField(password);
      break;
    case "confirmPassword":
      createAccountAction.typeInConfirmPasswInputField(confirmPassword);
      break;
  }
});

When("Clicks on Create an account button", () => {
  createAccountAction.clickOnCreateAccountButton();
});

Then("The Account should be created successfully", () => {
  sharedAssertion.checkUrlEqualValue(url);
  sharedAction.checkPageTitleContainValue(value);
});

Then("{string} message will be shown", (msg) => {
  createAccountPageAssertion.checkAlertMessageContainValue(msg);
});
