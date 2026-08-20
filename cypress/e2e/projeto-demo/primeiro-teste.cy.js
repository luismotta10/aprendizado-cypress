/// <reference types="cypress" />

const { should } = require("chai")


describe('Projeto Demo', ()=> {

    it('deve acessar a pagina inicial', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('Kitchen Sink').should('be.visible')

        cy.get('h1').should('be.visible')

        cy.get('h1').should('contain.text', 'Kitchen Sink')

        cy.get('[href="/commands/querying"]:visible').first().should('be.visible').click()
        cy.url().should('include', '/commands/querying')
        

    })

})