class addToCartAssertions {
  checkLogo() {
    cy.get(".logo").should("be.visible");

    return this;
  }

  messageSuccess(message) {
    cy.get("[role=alert]").should("contain", message);

    return this;
  }
  theCounterVisible() {
    cy.get(".counter-number").should("be.visible");

    return this;
  }
}

export default addToCart;
