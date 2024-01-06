import {
  Given,
  Then,
  When,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../../pageObjects/shared/actions.cy.js";
import addToCartActions from "../../../../../pageObjects/addToCart/actions.cy.js";
import addToCartAssertions from "../../../../../pageObjects/addToCart/assertions.cy.js";
const sharedAction = new sharedActions();
const addToCartAction = new addToCartActions();
const addToCartAssertion = new addToCartAssertions();

beforeEach(() => {
  // executed before Background in feature file .
  // will executed before-each test case

  cy.log("Hi from before each");
});

// Before({tags:"@TC-1 or @TC-3"},()=>{
//     // before-each test case in case we didn't use tags
//     // before-each specific test case according to the tag(s) used

//     cy.log("Hi Form Before")
// });

Before({ tags: "@smoke and @TC-1234" }, () => {
  // before-each test case in case we didn't use tags
  // before-each specific test case according to the tag(s) used
  cy.log("Hi Form Before");
});

Given("The user navigated to magento website", () => {
  sharedAction.openMagentoWebsite();
});

Then("The logo should be visible", () => {
  addToCartAssertion.checkLogo();
});

Given("The user search for shirt {word}", () => {
  cy.get("#search").type("shirt {enter}");
});

When("The user choose the product X", () => {
  addToCartAction.chooseProduct();
});

When("The user choose the size and color for product {float}", (number) => {
  cy.wait(1500);
  cy.log(number);
  addToCartAction.chooseSize();
  addToCartAction.chooseColor();
});

When("The user click on Add to cart button", () => {
  addToCartAction.clickAddToCartButton();
});

Then(
  "The product should be added to the cart successfully with {string}",
  (message) => {
    cy.wait(1000);
    addToCartAssertion.messageSuccess(message);
  }
);

Then("The counter of the cart should be visible", () => {
  addToCartAssertion.theCounterVisible();
});
