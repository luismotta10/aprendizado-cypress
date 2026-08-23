# Aprendizado Cypress

## Ambiente

- Sistema operacional: Windows
- IDE: VS Code
- Terminal: Git Bash
- Node.js: 24.19.0
- npm: 11.17.0

## Conceitos

### Node.js
...

### npm
...

### package.json
...

### package-lock.json
...

## Comparações com Robot Framework

| Robot Framework | Cypress |
|---|---|
| Python | JavaScript/TypeScript |
| pip | npm |
| requirements.txt | package.json |
| ... | ... |

## Comandos importantes

### Verificar Node
`node --version`

### Verificar npm
`npm --version`

### Inicializar projeto
`npm init -y`

### Instalar dependência
`npm install ...`

## Primeiro projeto Node.js

O projeto foi inicializado com:

npm init -y

Esse comando cria o arquivo package.json, que contém as configurações e informações do projeto Node.js.

O Cypress foi instalado com:

npm install cypress --save-dev

O Cypress foi registrado em devDependencies porque é uma ferramenta utilizada durante o desenvolvimento e execução dos testes.

## Comparação com Robot Framework:
Robot Framework             Cypress
--------------------------------------------
arquivo .robot              arquivo .cy.js
Test Case                   it()
Keyword                     função/comando
Library                     import/plugin
Resource                    support/commands

## Mapa mental estrutura:
describe()
    ↓
grupo de testes

it()
    ↓
teste individual

beforeEach()
    ↓
preparação antes de cada teste

cy
    ↓
interface de comandos do Cypress

cy.visit()
    ↓
navegação

cy.get()
    ↓
localização por seletor

cy.contains()
    ↓
localização por texto

.click()
.type()
.check()
    ↓
interações

.should()
    ↓
asserções

.parent()
.find()
.first()
.last()
    ↓
navegação/filtragem de elementos

## Análise de falha

Quando usamos:

cy.get('.todo-list li').should('have.length', 3)

e a aplicação possui 2 elementos, o Cypress consegue localizar os elementos, mas a assertion falha.

Fluxo:

cy.get() → localização OK → should() → esperado 3 / encontrado 2 → FAIL

É importante diferenciar uma falha de localização de uma falha de assertion.

## Primeiros conceitos de Cypress

### Estrutura básica de um teste

Um spec Cypress pode ser organizado com:

describe('Nome da suíte', () => {

  it('descrição do teste', () => {
    // comandos
  })

})

- `describe()` agrupa testes relacionados.
- `it()` representa um caso de teste.
- `cy` é o objeto utilizado para executar os comandos do Cypress.

### Spec

Um arquivo de teste do Cypress normalmente utiliza a extensão:

`.cy.js`

Exemplo:

`primeiro-teste.cy.js`

Os specs ficam dentro de:

`cypress/e2e/`

Neste projeto, os exercícios próprios estão organizados em:

`cypress/e2e/projeto-demo/`

### Navegação

`cy.visit()` acessa uma URL.

Exemplo:

cy.visit('https://example.cypress.io')

### Assertions

Uma ação não significa necessariamente uma validação.

Exemplo:

cy.visit('https://example.cypress.io')

apenas navega para a página.

Para validar um resultado podemos utilizar:

cy.contains('Kitchen Sink').should('be.visible')

Nesse caso:

- `cy.contains()` procura um elemento pelo conteúdo de texto.
- `should()` realiza uma assertion.
- `be.visible` verifica se o elemento está visível.

### Command Log

O Cypress apresenta os comandos executados no painel de execução.

Exemplo:

visit
contains
assert

É possível clicar nos comandos para investigar o estado da aplicação durante a execução.

### Diagnóstico de falhas

Falha de assertion:

cy.get('.todo-list li').should('have.length', 3)

Se forem encontrados 2 elementos:

Esperado: 3
Encontrado: 2

O elemento foi localizado, mas a condição esperada não foi satisfeita.

Falha de localização:

cy.contains('Texto que nao existe').should('be.visible')

Nesse caso, nenhum elemento correspondente foi encontrado.

O Cypress informa o timeout e o conteúdo que esperava encontrar.

### Retry-ability

O Cypress possui mecanismo automático de retry para determinados comandos e assertions.

Exemplo:

cy.contains('Texto que nao existe')

O Cypress continua tentando localizar o conteúdo durante o período de timeout configurado antes de considerar o comando como falho.

Nos exercícios realizados, observamos:

`Timed out retrying after 4000ms`

### IntelliSense

A diretiva:

/// <reference types="cypress" />

pode ser adicionada ao início do spec para que o VS Code reconheça os tipos do Cypress e disponibilize autocomplete para seus comandos.

Ela não é necessária para que o teste seja executado pelo Cypress.

### Primeiro teste próprio

Foi criado o spec:

`cypress/e2e/projeto-demo/primeiro-teste.cy.js`

Exemplo atual:

/// <reference types="cypress" />

describe('Projeto Demo', () => {

  it('deve acessar a pagina inicial', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink').should('be.visible')
  })

})


## Seletores e asserções

### cy.get()

Usado para localizar elementos através de seletores CSS.

Exemplo:

cy.get('h1')

Também pode localizar por atributos:

cy.get('[href="/commands/querying"]')

### Asserções

As asserções validam o estado ou conteúdo encontrado.

Exemplos:

cy.get('h1').should('be.visible')

cy.get('h1').should('contain.text', 'Kitchen Sink')

### Múltiplos elementos

Um seletor pode retornar mais de um elemento.

Para selecionar o primeiro:

cy.get('[href="/commands/querying"]').first()

Também é possível filtrar elementos visíveis:

cy.get('[href="/commands/querying"]:visible')

### Aprendizado com falha

Ao utilizar `.first()` no seletor `[href="/commands/querying"]`, o primeiro elemento encontrado estava dentro de um menu oculto.

O teste falhou porque `should('be.visible')` exige que o elemento esteja visível.

Isso demonstrou que um seletor pode estar sintaticamente correto, mas não necessariamente identificar o elemento desejado para o teste.

Sempre que possível, deve-se priorizar seletores específicos e estáveis em vez de depender de `.first()`, `.last()` ou `:visible` para contornar seletores pouco específicos.


## Comandos básicos de interação e validação

### Localização de elementos

- `cy.get()` - localiza elementos utilizando seletores CSS.
- `cy.contains()` - localiza elementos pelo texto/conteúdo.
- `cy.find()` - localiza elementos dentro de outro elemento.

### Assertions

- `.should('be.visible')` - valida se o elemento está visível.
- `.should('have.value', 'valor')` - valida o valor de campos de entrada.
- `.should('have.text', 'texto')` - valida o texto de um elemento.

### Interações

- `.type()` - insere texto em campos.
- `.clear()` - limpa o conteúdo de um campo.
- `.select()` - seleciona uma opção em um dropdown.
- `.check()` - marca checkbox ou radio button.
- `.uncheck()` - desmarca checkbox.
- `.click()` - realiza um clique no elemento.

### Encadeamento

Os comandos do Cypress podem ser encadeados para representar o fluxo do teste:

cy.get()
    .should()
    .click()

Exemplo:

cy.get('#query-btn')
    .should('be.visible')
    .click()

O fluxo representa:

Localizar → Validar → Interagir

### Observação

Uma assertion deve validar um comportamento ou estado esperado do sistema.
Nem toda ação precisa obrigatoriamente de uma assertion no mesmo elemento.

Por exemplo, `.click()` executa a ação, enquanto `.should()` é utilizado quando existe uma condição esperada que possa ser validada.

## Busca contextual com cy.find() e cy.contains()

### cy.find()

O `cy.find()` é utilizado para localizar elementos dentro de outro elemento já localizado.

Exemplo:

cy.get('.query-list')
    .find('li')
    .should('be.visible')

Nesse caso:

1. `cy.get('.query-list)` localiza a lista.
2. `.find('li')` procura os elementos `<li>` dentro dessa lista.
3. `.should('be.visible')` valida se os elementos encontrados estão visíveis.

O `find()` é útil quando queremos restringir a busca a uma determinada área da página.

### Busca contextual com contains()

Também podemos utilizar `contains()` a partir de um elemento já localizado:

cy.get('.query-list')
    .contains('bananas')
    .should('be.visible')

Nesse caso, o Cypress procura o texto `bananas` somente dentro de `.query-list`.

Isso é diferente de:

cy.contains('bananas')

que procura o texto na página sem restringir previamente o contexto.

### Diferença

- `cy.get()` → localiza por seletor.
- `cy.contains()` → localiza pelo texto.
- `cy.find()` → procura elementos dentro de um elemento já localizado.
- `cy.get().contains()` → procura um texto dentro de um elemento específico.

Exemplo de fluxo:

cy.get('.query-list')
    .contains('bananas')
    .should('be.visible')

O fluxo representa:

Localizar elemento pai → restringir o contexto → localizar conteúdo → validar