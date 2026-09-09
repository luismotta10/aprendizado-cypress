/// <reference types="cypress" />


describe('Projeto Demo', () => {

    // Cenário 1: valida o acesso à página inicial
    it('deve acessar a pagina inicial', () => {

        // Acessa a URL informada
        cy.visit('https://example.cypress.io')

        // Localiza o texto "Kitchen Sink" e verifica se está visível
        cy.contains('Kitchen Sink').should('be.visible')

        // Localiza o elemento <h1> e verifica se está visível
        cy.get('h1').should('be.visible')

        // Localiza o <h1> e verifica se contém o texto "Kitchen Sink"
        cy.get('h1').should('contain.text', 'Kitchen Sink')

        // Localiza o link "Querying", verifica se está visível e clica nele
        cy.get('[href="/commands/querying"]:visible')
            .first()
            .should('be.visible')
            .click()

        // Verifica se a URL atual contém "/commands/querying"
        cy.url().should('include', '/commands/querying')
    })


    // Cenário 2: valida o preenchimento de um campo de texto
    it('deve preencher um campo de texto', () => {

        // Acessa a página de comandos de consulta
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza o campo pelo ID
        cy.get('#inputEmail')

            // Digita um endereço de e-mail no campo
            .type('teste@email.com')

            // Verifica se o valor digitado está correto
            .should('have.value', 'teste@email.com')
    })


    // Cenário 3: valida a seleção de uma opção no dropdown
    it('deve selecionar uma opcao no dropdown', () => {

        // Acessa a página de comandos de ações
        cy.visit('https://example.cypress.io/commands/actions')

        // Localiza o dropdown pela classe CSS
        cy.get('.action-select')

            // Seleciona a opção "oranges"
            .select('oranges')

            // Verifica se o value da opção selecionada é "fr-oranges"
            .should('have.value', 'fr-oranges')
    })

    // Cenário 4: valida a seleção de um checkbox
    it('deve selecionar um checkbox', () => {
        
        // Acessa a página de comandos de ações
        cy.visit('https://example.cypress.io/commands/actions')

        // Localiza o checkbox pelo atributo value
        cy.get('input[value="checkbox1"]')

            // Marca o checkbox
            .check()

            // Verifica se o checkbox está marcado
            .should('be.checked')

            // desmarca o checkbox
            .uncheck()

            // Verifica se o checkbox está desmarcado
            .should('not.be.checked')
                    
    })

    // Cenário 5: valida a seleção de um radio button
    it('deve selecionar um radio button', () => {

        // Acessa a página de comandos de ações
        cy.visit('https://example.cypress.io/commands/actions')

        // Localiza o primeiro radio pelo ID
        cy.get('#optionsRadios1')

            // Seleciona o radio
            .check()

            // Verifica se o radio está selecionado
            .should('be.checked')
                
    })

    // Cenário 6: valida a troca de seleção entre radio buttons
    it('deve trocar a selecao entre radio buttons', () => {

    // Acessa a página de comandos de ações
    cy.visit('https://example.cypress.io/commands/actions')

    // Localiza o primeiro radio pelo ID
    cy.get('#optionsRadios1')

        // Seleciona o primeiro radio
        .check()

        // Verifica se o primeiro radio está selecionado
        .should('be.checked')

    // Localiza o segundo radio pelo ID
    cy.get('#optionsRadios2')

        // Seleciona o segundo radio
        .check()

        // Verifica se o segundo radio está selecionado
        .should('be.checked')

    // Verifica se o primeiro radio foi desmarcado automaticamente
    cy.get('#optionsRadios1')
        .should('not.be.checked')
    })

    // Cenário 7: valida o clique em um botão
    it('deve clicar em um botao', () => {
        cy.visit('https://example.cypress.io/commands/querying')

        cy.get('#query-btn')

            // Verifica se o botão está visivel
            .should('be.visible')

            // Clica no botão
            .click()        
    })

    // Cenário 8: valida o clique no botão Save Form
    it('deve clicar no botao Save Form', () => {

    // Acessa a página de comandos de consulta
    cy.visit('https://example.cypress.io/commands/querying')

    // Localiza o botão pelo texto
    cy.contains('Save Form')

        // Verifica se o botão está visível
        .should('be.visible')

        // Clica no botão
        .click()
    })

    // Cenário 9: localizar um item da lista pelo texto
    it('deve localizar uma fruta da lista', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        
        // Localiza o elemento que contém o texto "apples"
        cy.contains('apples')

            // Verifica se o elemento está visível
            .should('be.visible')

            // Clica no elemento
            .click()        
    })

    // Cenário 10: localizar elementos dentro de uma lista
    it('deve localizar elemento dentro da lista', () => {
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza a lista de frutas
        cy.get('.query-list')

            // Procura os elementos ,li. que estão dentro da lista
            .find('li')

            // Verifica se os elementos enconatrados estão visíveis
            .should('be.visible')
    })

    // Cenário 11: localizar uma fruta específica dentro da lista
    it('deve localizar uma fruta especifica dentro da lista', () => {
        cy.visit('https://example.cypress.io/commands/querying')

        // Localizar a lista de frutas
        cy.get('.query-list')

            // Procura o item dentro da lista
            .contains('bananas')

            // Verifica se a fruta está visível
            .should('be.visible')
                    
    })

    // Cenário 12: localizar o primeiro elemento da lista
    it('deve localizar o primeiro elemento da lista', () => {

        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza a lista de frutas
        cy.get('.query-list')

            // Localiza todos os elementos <li> dentro da lista
            .find('li')

            // Seleciona somente o primeiro elemento encontrado
            .first()

            // Valida se o primeiro elemento está visível
            .should('be.visible')
    })

    // Cenário 13: localizar o ultimo elemento da lista
    it('deve localizar o ultimo elemento da lista', () => {
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza a lista de frutas
        cy.get('.query-list')

            // Localiza todos os elementos <li> dentro da lista
            .find('li')

            // Seleciona somente o ultimo elemento encontrado
            .last()

            // Valida se o primeiro elemento está visível
            .should('be.visible')
    })

    // Cenário 14: localizar um elemento especifico pela posicao
    it('deve localizar um elemeto especifico pela posicao', () => {
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza a lista de frutas
        cy.get('.query-list')

            // Localiza todos os elementos <li> dentro da lista
            .find('li')

            // Seleciona o elemento que está na posição 2
            .eq(2)

            // Valida se o primeiro elemento está visível
            .should('be.visible')
        
    })

    // Cenário 15: localizar elementos dentro de um formulario
    it('deve localizar elementos dentro de um formulario', () => {

        // Acessa a página de comandos de ações
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza o formulário e define ele como contexto da busca
        cy.get('.query-form').within(() => {

            // Localiza o primeiro campo email dentro do formulário e preenche
            cy.get('#inputEmail')
                .should('be.visible')
                .type('testecypress@teste.com.br')
                
            // Verifica se o campo email está visível e preenche
            cy.get('#inputPassword')
                .should('be.visible')
                .type('teste')
        })
    })

    // Cenário 16: identifica o elemento raiz do contexto
    it('deve identificar o formulario com o elemento raiz', () => {

        // Acessa a pagina de comandos de consulta
        cy.visit('https://example.cypress.io/commands/querying')

        // Localiza o formulario e cria um contexto de busca
        cy.get('.query-form').within(()=> {

            // Retorna o elemnto que esta sendo usado como contexto
            cy.root()
                .should('have.class', 'query-form')
        })
        
    })


})