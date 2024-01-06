class addToCartActions {
  chooseProduct() {
    cy.get(".product-items li").first().click();

    return this;
  }

  chooseSize() {
    cy.get(".swatch-attribute.size").contains("M").click();

    return this;
  }
  chooseColor() {
    cy.get(".swatch-attribute.color").find(".swatch-option").last().click();

    return this;
  }

  clickAddToCartButton() {
    cy.get("#product-addtocart-button").click();
    return this;
  }
}

export default addToCart;
