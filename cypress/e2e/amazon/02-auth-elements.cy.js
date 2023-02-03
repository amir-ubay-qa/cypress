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
  it("2. verify sign-in input password page elements", () => {
    cy.get("#ap_email").type("test@email.com");
    cy.get("#continue").click();
    cy.get(".a-link-nav-icon").should("have.attr", "href", "/ref=ap_frn_logo");
    // Heading
    cy.get("h1.a-spacing-small").should("contain", "Sign in");
    // Currrent email to sign in
    cy.get("span").contains("test@email.com").should("be.visible");
    // Change email link
    cy.get("a#ap_change_login_claim").contains("Change").should("be.visible");
    // Master form elements
    cy.get('form[name="signIn"]').should("be.visible");
    // Password field label
    cy.get(".a-form-label").contains("Password").should("be.visible");
    cy.get("a#auth-fpp-link-bottom")
      // Forgot password link
      .contains("Forgot your password?")
      .should("be.visible");
    // Password input field
    cy.get("input#ap_password").should("be.visible");
    // Submit sign in button
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
  it("3. verify create-account page elements", () => {
    cy.get("#createAccountSubmit")
      .contains("Create your Amazon account")
      .click();
    cy.get(".a-link-nav-icon").should("have.attr", "href", "/ref=ap_frn_logo");
    cy.get("h1.a-spacing-small").should("contain", "Create account");
    cy.get("form#ap_register_form").should("be.visible");
    // Your name field
    cy.get(".a-form-label").contains("Your name").should("be.visible");
    cy.get("input#ap_customer_name").should("be.visible");
    // Mobile number field
    cy.get(".a-form-label")
      .contains("Mobile number or email")
      .should("be.visible");
    cy.get("input#ap_email").should("be.visible");
    // Password field
    cy.get(".a-form-label").contains("Password").should("be.visible");
    cy.get("input#ap_password").should("be.visible");
    // Password Re-enter field
    cy.get(".a-form-label").contains("Re-enter password").should("be.visible");
    cy.get("input#ap_password_check").should("be.visible");
    // Continue Button
    cy.get("#continue").should("be.visible");
    // Legal Text Row
    cy.get("#legalTextRow")
      .contains("By creating an account, you agree to Amazon's")
      .should("be.visible");
    // Sign In link
    cy.get("a").contains("Sign in").should("be.visible");
    // Create free business account link
    cy.get("a").contains("Create a free business account").should("be.visible");
  });
});
