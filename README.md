# Automation with Cypress

## How to run
1. Clone the repository
2. Install the dependecies
	> npm install
3. Open the cypress dashboard
	> npx cypress open
4. Or you can use the cli to run the cypress test
	> npx cypress run

# AMAZON E-commerce (E2E Testing)

## [1. Test Scope Redirection Links](https://github.com/amir-ubay-qa/cypress/blob/main/cypress/e2e/amazon/01-redirection-links.cy.js)

### A. Redirection to and from home page

1. Verify amazon logo redirection
2. Verify Return & Orders redirect to signin page (sign-out)
3. Verify cart redirect to cart page
4. Verify today's deal redirect to correct page
5. Verify customer service menu redirect to correct page
6. Verify registry menu redirect to correct page
7. Verify Gift Cards menu redirect to correct menu
8. Verify sell menu redirect to correct page

### B.  Redirection to and from sign in page

1. user can navigate to sign in page
2. user can navigate to link Conditions of Use
3. user can navigate to link Privacy Notice
4. user can navigate to link Forgot your password
5. user can navigate to link Other Issues with Sign-in
6. user can navigate to Amazon account creation page
7. user can navigate to link Conditions of Use in footer
8. user can navigate to link Privacy Notice in footer

## [2. Test Scope Elements' Page Verification](https://github.com/amir-ubay-qa/cypress/blob/main/cypress/e2e/amazon/02-page-elements.cy.js)

### Authentication Page Elements Verifiation

1. verify sign-in input email page elements
2. verify sign-in input password page elements
3. verify create-account page elements
4. Verify location selection is working

# Reqress Mockup API (XHR Testing)

## [1. Test Scope User Endpoints](https://github.com/amir-ubay-qa/cypress/blob/main/cypress/e2e/reqres/01-user-endpoint.cy.js)

1. Verify GET user list respond properties
2. Verify values of get user page 1 properties
3. Verify values of get user page 2 properties
4. Verify data of user with id 2
5. Verify response for user not found
6. Verify respond after post a new user
7. Verify respond after update a user
8. Verify respond after delete a user