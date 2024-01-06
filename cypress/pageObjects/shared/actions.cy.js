class sharedActions {
    openMagentoWebsite(){
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
        return this;
    }

    loginToMagentoWebsite(email,password){
       // this.openMagentoWebsite();
      // cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
        cy.login(email,password)
        return this;
    }
}
export default sharedActions;