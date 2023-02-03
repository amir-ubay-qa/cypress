/// <reference types="cypress" />

describe("Elements verifications in authentication pages", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com");
    cy.get("#nav-link-accountList").click();
  });
  it("1. verify sign-in input email page elements", () => {
    cy.get(".a-link-nav-icon").should("have.attr", "href", "/ref=ap_frn_logo");
    cy.get("h1.a-spacing-small").should("contain", "Sign in");
    cy.get("label")
      .contains("Email or mobile phone number")
      .should("be.visible");
    cy.get("#ap_email").should("be.visible");
    cy.get("#continue input").should("be.visible");
    cy.get(".a-section")
      .contains("By continuing, you agree to Amazon's")
      .should("be.visible");
    cy.get(".a-expander-prompt").contains("Need help").should("be.visible");
    cy.get(".a-expander-prompt").contains("Need help").click();
    cy.get("a").contains("Forgot your password?").should("be.visible");
    cy.get("a").contains("Other issues with Sign-In").should("be.visible");
    cy.get("h5").contains("New to Amazon?").should("be.visible");
    cy.get("#auth-create-account-link")
      .contains("Create your Amazon account")
      .should("be.visible");
  });
  it.only("2. verify sign-in input password page elements", () => {
    cy.get("#ap_email").type("test@email.com");
    cy.get("#continue").click();
    cy.get(".a-link-nav-icon").should("have.attr", "href", "/ref=ap_frn_logo");
    cy.get("h1.a-spacing-small").should("contain", "Sign in");
    cy.get("span").contains("test@email.com").should("be.visible");
    cy.get("a#ap_change_login_claim").contains("Change").should("be.visible");
    cy.get('form[name="signIn"]').should("be.visible");
    cy.get(".a-form-label").contains("Password").should("be.visible");
    cy.get("a#auth-fpp-link-bottom")
      .contains("Forgot your password?")
      .should("be.visible");
    cy.get("input#ap_password").should("be.visible");
    cy.get("#signInSubmit").should("be.visible");
    cy.get("span#auth-signin-button-announce")
      .contains("Sign in")
      .should("be.visible");
    cy.get(".a-label.a-checkbox-label")
      .contains("Keep me signed in")
      .should("be.visible");
    cy.get(".a-declarative").contains("Details").click();
    cy.get(".a-popover-wrapper")
      .contains("Keep Me Signed In")
      .should("be.visible");
    cy.get("button.a-button-close.a-declarative").click();
    cy.get(".a-popover-wrapper")
      .contains("Keep Me Signed In")
      .should("not.be.visible");
  });
  it("3. verify create-account page elements", () => {});
});
