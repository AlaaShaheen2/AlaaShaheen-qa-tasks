/// <reference types= "cypress" />
describe("Task # 5", () => {
  it("check that all fields/buttons in creating an account page are visible", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").should("be.visible");
    cy.get("#lastname").should("be.visible");
    cy.get("#email_address").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password-confirmation").should("be.visible");
    cy.get(".submit.primary").should("be.visible");
  });
  it('create an account', () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type('Alaa');
    cy.get("#lastname").type('Shaheen');
    cy.get("#email_address").type('task5@drmail.in');
    cy.get("#password").type('Test123!');
    cy.get("#password-confirmation").type('Test123!');
    cy.get(".submit.primary").click();

  });
  
});
