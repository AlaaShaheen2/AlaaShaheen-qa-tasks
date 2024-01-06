class loginPageAssertions {
  // methods needed for assertions in login page 

  checkAlertMessageContainValue(message){
        cy.get(".welcome").first().should("contain", message);
        return this;
    }
}

export default loginPageAssertions;