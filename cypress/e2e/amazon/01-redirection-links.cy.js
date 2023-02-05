/// <reference types="cypress" />

describe("Redirection to and from home page", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com")
  })
  context("Navigation menu", () => {
    it("Verify amazon logo redirection", () => {
      cy.get("#nav-logo-sprites")
        .should("have.attr", 'href', '/ref=nav_logo')
    })
    it("1. Verify Return & Orders redirect to signin page (sign-out)", () => {
      cy.get("#nav-orders")
        .click()
      cy.title().should('contain', 'Amazon Sign-In')
    })
    it("2. Verify cart redirect to cart page", () => {
      cy.get("#nav-cart")
        .click()
      cy.title().should('contain', 'Amazon.com Shopping Cart')
    })
    it("3. Verify today's deal redirect to correct page", () => {
      cy.get('a').contains("Today's Deals").click({force:true})
      cy.title().should('contain', "Amazon.com - Today's Deals")
    })
    it("4. Verify customer service menu redirect to correct page", () => {
      cy.get('a').contains("Customer Service").click({force:true})
      cy.title().should('contain', "Amazon Customer Service Support – Amazon.com")
    })
    it("5. Verify registry menu redirect to correct page", () => {
      cy.get('a').contains('Registry').click({force:true})
      cy.title().should("contain", "Amazon Registry & Gifting")
    })
    it("6. Verify Gift Cards menu redirect to correct menu", () => {
      cy.get('a').contains("Gift Cards").click({force:true})
      cy.title().should("contain", "Amazon.com Gift Cards")
    })
    it("7. Verify sell menu redirect to correct page", () => {
      cy.get("#nav-xshop").within(() => {
        cy.get('a').contains('Sell').click({force:true})
      })
      cy.title().should('contain', 'Amazon.com: Sell Products Online with Selling on Amazon')
    })
  })
})

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


