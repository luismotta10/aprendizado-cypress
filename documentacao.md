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

