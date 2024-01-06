class loginPageActions{
    // methods needed in login page 

    typeInEmailInputField(email){
        cy.get("#email").clear().type(email);
        return this;
    }

    typeInPasswordInputField(password){
        cy.get("#pass").clear().type(password);
        return this;
    }

    clickOnSignInButton(){
        cy.get("[name=send]").click();
        return this;
    }

}

export default loginPageActions;

