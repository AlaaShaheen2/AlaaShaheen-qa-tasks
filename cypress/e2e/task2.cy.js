it("Task2", () => {
    //to visit the website
  cy.visit("/checkout/#shipping");
  cy.get("#search").type("shirt");
  cy.get(".action.search").click();
  cy.get(".products > :nth-child(2)").click();
  cy.get("[option-label=M]").click();
  cy.get("[option-label=Gray]").click();
  cy.get("#product-addtocart-button").click();
  cy.wait(5000);
  cy.get(".showcart").click();
  cy.get("#top-cart-btn-checkout").click();
  cy.wait(5000);
  cy.get("#customer-email-fieldset #customer-email").type("a@gmail.com");
  cy.get("[name=firstname]").type("Alaa");
  cy.get("[name=lastname]").type("Shaheen");
  cy.get("[name=company]").type("Knowledge Academy ");
  cy.get('[name="street[0]"]').type("Jerusalem ");
  cy.get('[name="street[1]"]').type("Jerusalem ");
  cy.get('[name="street[2]"]').type("Jerusalem ");
  cy.get('[name="city"]').type("Jerusalem ");
  cy.get('[ name="region_id"]');
  cy.get('[name="postcode"]').type("+972000");
  cy.get('[name="country_id"]');
  cy.get(' [name="telephone"]').type("+97200000000");
  cy.get("tbody > :nth-child(1)");
  cy.get("tbody > :nth-child(1) > :nth-child(1)");
  cy.get("tbody > :nth-child(1) > :nth-child(2)");
  cy.get("tbody > :nth-child(1) > :nth-child(3)");
  cy.get("tbody > :nth-child(1) > :nth-child(4)");
  cy.get("tbody > :nth-child(2)");
  cy.get("tbody > :nth-child(2) > :nth-child(1)");
  cy.get("tbody > :nth-child(2) > :nth-child(2)");
  cy.get("tbody > :nth-child(2) > :nth-child(3)");
  cy.get("tbody > :nth-child(2) > :nth-child(4)");
 

  //   cy.get('#shipping .step-title');
});
