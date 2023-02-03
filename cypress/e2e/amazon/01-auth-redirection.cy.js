/// <reference types="cypress" />

describe("Redirection to and from sign in page", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com");
    cy.get("#nav-link-accountList").click();
  });

  it("1. user can navigate to sign in page", () => {
    cy.url().should("contain", "signin");
  });

  it("2. user can navigate to link Conditions of Use", () => {
    cy.get(".a-section")
      .contains("By continuing")
      .within(() => {
        cy.get("a").contains("Conditions of Use").click();
      });
    cy.url().should("contain", "condition_of_use");
  });

  it("3. user can navigate to link Privacy Notice", () => {
    cy.get(".a-section")
      .contains("By continuing")
      .within(() => {
        cy.get("a").contains("Privacy Notice").click();
      });
    cy.url().should("contain", "privacy_notice");
  });

  it("4. user can navigate to link Forgot your password", () => {
    cy.get(".a-expander-prompt").contains("Need help").click();
    cy.wait(2000);
    cy.get("a").contains("Forgot your password?").click();
    cy.url().should("contain", "forgotpassword");
  });

  it("5. user can navigate to link Other Issues with Sign-in", () => {
    cy.get(".a-expander-prompt").contains("Need help").click();
    cy.wait(2000);
    cy.get("a").contains("Other issues with Sign-In").click();
    cy.url().should("contain", "account-issues");
  });

  it("6. user can navigate to Amazon account creation page", () => {
    cy.get("#auth-create-account-link").click();
    cy.url().should("contain", "register");
  });

  it("7. user can navigate to link Conditions of Use in footer", () => {
    cy.get("a").contains("Conditions of Use").click();
    cy.url().should("contain", "condition_of_use");
  });

  it("8. user can navigate to link Privacy Notice in footer", () => {
    cy.get("a").contains("Privacy Notice").click();
    cy.url().should("contain", "privacy_notice");
  });
});
