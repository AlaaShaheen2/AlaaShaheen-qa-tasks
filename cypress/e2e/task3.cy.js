describe("Task # 3", () => {
  it("home page", () => {
    cy.visit("https://demo.productionready.io/#");
    cy.get(".navbar-brand.ng-binding");
    cy.contains("a", "Home");
    cy.contains("a", "Sign up");
    cy.get(".banner").find("h1");
    cy.contains("p", "A place to share your knowledge.");
    cy.get(".outline-active").children().eq(1);
    cy.get(".btn-outline-primary").first();
    cy.contains("span", "Read more...");
    cy.get(".sidebar p");
    cy.get(".sidebar").find("a").eq(3);
    cy.get(".sidebar").find("a").last();
  });
  it("Sign In Page", () => {
    cy.visit("https://demo.productionready.io/#/login");
    cy.contains("h1", "Sign in");
    cy.contains("a", "Need an account?");
    cy.get(".form-group .ng-valid-email");
    cy.get(".form-control").last();
    cy.get(".ng-pristine .btn-primary");
  });

  it("Article Page", () => {
    cy.visit("https://demo.productionready.io/#");
    cy.get(".preview-link").first().click();
    cy.wait(6000);
    cy.get(".container h1");
    cy.get(".banner .article-meta img");
    cy.get(".banner .author");
    cy.get(".banner .date");
    cy.contains("button", "Follow Anah Benešová");
    cy.get(".banner favorite-btn");
    cy.get(".article-content p");
    cy.get(".tag-list").find("li").first();
    cy.get(".tag-list").find("li").last();
  });
});
