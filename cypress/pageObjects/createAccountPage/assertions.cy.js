class createAccountPageAssertions {
  checkAlertMessageContainValue(msg) {
    cy.get("[role=alert]").should("contain", msg);
    return this;
  }
}
export default createAccountPageAssertions;
