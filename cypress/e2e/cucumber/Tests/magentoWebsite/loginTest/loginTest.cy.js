import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loginPageActions from "../../../../pageObjects/loginPage/actions.cy";
import loginPageAssertions from "../../../../pageObjects/loginPage/assertions.cy";
import sharedActions from "../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../pageObjects/shared/assertions.cy";

const email = "CypressUser@gmail.com";
const password = "test@123";
const url = "https://magento.softwaretestingboard.com/customer/account/";

const loginAction = new loginPageActions();
const loginAssertion = new loginPageAssertions();
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();

Given("The user navigated to login page in magento website", () => {
  // sharedAction.openMagentoWebsite();
  // sharedAction.loginToMagentoWebsite(email,password);

  // or using chain methods 
  sharedAction.openMagentoWebsite().loginToMagentoWebsite(email,password);
});

When("Enter email in email input field", () => {
  loginAction.typeInEmailInputField(email);
});

When("Enter password in password input field", () => {
  loginAction.typeInPasswordInputField(password);
});

When("Click on sign in button", () => {
  loginAction.clickOnSignInButton();
});

Then("The user should be redirected to My Account", () => {
  sharedAssertion.checkUrlEqualValue(url);
  sharedAssertion.checkPageTitleContainValue("My Account")
  cy.wait(3000);
  loginAssertion.checkAlertMessageContainValue("Welcome, cypress user!");
});
