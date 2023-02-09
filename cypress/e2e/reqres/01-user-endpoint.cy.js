/// <reference types="cypress" />


describe("Reqres - API user endpoint test suite", () => {
   it('Verify GET user list respond properties', () => {
      cy.request('https://reqres.in/api/users?page=1').as('getAllUsers')
      cy.get('@getAllUsers')
         .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('page')
            expect(response.body).to.have.property('per_page')
            expect(response.body).to.have.property('total')
            expect(response.body).to.have.property('total_pages')
            expect(response.body).to.have.property('data')
            expect(response.body.data[0]).to.have.property('id')
            expect(response.body.data[0]).to.have.property('email')
            expect(response.body.data[0]).to.have.property('first_name')
            expect(response.body.data[0]).to.have.property('last_name')
            expect(response.body.data[0]).to.have.property('avatar')
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property('url')
            expect(response.body.support).to.have.property('text')

         })
   })
   it('Verify values of get user page 1 properties', () => {
      cy.request('https://reqres.in/api/users?page=1').as('getAllUsers')
      cy.get('@getAllUsers')
         .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('page', 1)
            expect(response.body).to.have.property('per_page', 6)
            expect(response.body).to.have.property('total', 12)
            expect(response.body).to.have.property('total_pages', 2)
            expect(response.body.data).to.have.length(6)
         })
   })
   it('Verify values of get user page 2 properties', () => {
      cy.request('https://reqres.in/api/users?page=2').as('getAllUsers')
      cy.get('@getAllUsers')
         .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('page', 2)
            expect(response.body).to.have.property('per_page', 6)
            expect(response.body).to.have.property('total', 12)
            expect(response.body).to.have.property('total_pages', 2)
            expect(response.body.data).to.have.length(6)
         })
   })
   it('Verify data of user with id 2', () => {
      cy.request('https://reqres.in/api/users/2').as('getUser2')
      cy.get('@getUser2')
         .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.data.id).to.equal(2)
            expect(response.body.data.email).to.equal('janet.weaver@reqres.in')
            expect(response.body.data.first_name).to.equal('Janet')
            expect(response.body.data.last_name).to.equal('Weaver')
            expect(response.body.data.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg')
         })
   })
   it('Verify response for user not found', () => {
      cy.request({
         url: 'https://reqres.in/api/users/233',
         failOnStatusCode: false
      }).as('notFound')
      cy.get('@notFound')
         .should((response) => {
            expect(response.status).to.equal(404)
         })
   })
   it('Verify respond after post a new user', () => {
      cy.request('POST', 'https://reqres.in/api/users', {
         'name': "Morpheus",
         'job': 'Team Leader'
      }).as('postUser')
      cy.get('@postUser')
         .should((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('name', "Morpheus")
            expect(response.body).to.have.property('job', "Team Leader")
         })
   })
   it('Verify respond after update a user', () => {
      cy.request('PUT', 'https://reqres.in/api/users/2', {
         'name': "Morpheus",
         'job': 'CTO'
      }).as('putUser')
      cy.get('@putUser')
         .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('name', "Morpheus")
            expect(response.body).to.have.property('job', "CTO")
         })
   })
   it('Verify respond after delete a user', () => {
      cy.request({
         method: 'DELETE',
         url: 'https://reqres.in/api/users/2',
         failOnStatusCode: false
      }).as('deleteUser')
      cy.get('@deleteUser')
         .should((response) => {
            expect(response.status).to.equal(204)
         })
   })
})