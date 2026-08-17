/// <reference types="cypress" />


describe('Projeto Demo', ()=> {

    it('deve acessar a pagina inicial', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('Kitchen Sink').should('be.visible')

    })

})