import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const firstName="Razan";
const lastName="user";
const email = "razanUsser"+Math.floor(Math.random()*100)+"@gmail.com"; 

// float number  Math.random() 0 - 1 0.1 , 0.2345566778 
// Math.floor(Math.random()*100) // integer numbers 0-9 

const password = "test@123%6";
const confirmPassword = "test@123%6";

Given("The user navigated to create account page",()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});

When("Type {string} in the field",(fieldName)=>{
    switch(fieldName){
        case "firstName":
            cy.get("#firstname").clear().type(firstName);
            break;
        case "lastName":
            cy.get("#lastname").clear().type(lastName);
            break; 
        case "email":
            cy.get("#email_address").clear().type(email);
            break;
        case "password":
            cy.get("#password").clear().type(password);
            break; 
        case "confirmPassword":
            cy.get("#password-confirmation").clear().type(confirmPassword);
            break;     
        }
})

When("Clicks on Create an account button",()=>{
    cy.get(".submit.primary").click();
});

Then("The Account should be created successfully",()=>{
    cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
    cy.get(".page-title").should("contain","My Account");
});

Then("{string} message will be shown",(msg)=>{
    cy.get("[role=alert]").should("contain",msg)
});
