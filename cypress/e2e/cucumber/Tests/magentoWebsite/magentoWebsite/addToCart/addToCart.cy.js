import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=>{
    // executed before Background in feature file .
   // will executed before-each test case   

    cy.log("Hi from before each");
});

// Before({tags:"@TC-1 or @TC-3"},()=>{
//     // before-each test case in case we didn't use tags 
//     // before-each specific test case according to the tag(s) used  

//     cy.log("Hi Form Before")
// });

Before({tags:"@smoke and @TC-1234"},()=>{
    // before-each test case in case we didn't use tags 
    // before-each specific test case according to the tag(s) used  
    cy.log("Hi Form Before")
});

Given("The user navigated to magento website",()=>{
    cy.visit("/");
});

Then("The logo should be visible",()=>{
    cy.get(".logo").should("be.visible");
});

Given("The user search for shirt {word}",()=>{
    cy.get("#search").type("shirt {enter}");
});

When("The user choose the product X",()=>{
    cy.get(".product-items li").first().click();
});

When("The user choose the size and color for product {float}",(number)=>{
    cy.wait(1500);
    cy.log(number);
    cy.get(".swatch-attribute.size").contains("M").click();
    cy.get(".swatch-attribute.color").find(".swatch-option").last().click();
});

When("The user choose the size {string} and color {string} for product X",(size,colorIndex)=>{
    cy.wait(1500);
    cy.get(".swatch-attribute.size").contains(size).click();
    cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();
});

When("The user click on Add to cart button",()=>{
    cy.get("#product-addtocart-button").click();
});

Then("The product should be added to the cart successfully with {string}",(message)=>{
    cy.wait(1000)
    cy.get("[role=alert]").should("contain",message)
});

Then("The counter of the cart should be visible",()=>{
    cy.get(".counter-number").should("be.visible")
});