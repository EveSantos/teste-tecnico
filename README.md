
# TesteTecnico

Este projeto possui um front-end Angular e um back-end simulado (mock) em Node.js.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Angular CLI](https://angular.io/cli) (versão 18 ou superior)

Instale as dependências do projeto:

```bash
npm install
```

## Como rodar o back-end (mock)

O back-end simulado está localizado em `mocks/backend.js`.

Para iniciar o mock do back-end, execute:

```bash
node mocks/backend.js
```

O servidor será iniciado em `http://localhost:3000`.

## Como rodar o front-end (Angular)

Em outro terminal, execute:

```bash
ng serve
```

O front-end estará disponível em `http://localhost:4200`.

## Rodando os testes unitários

```bash
ng test
```

## Build do projeto

```bash
ng build
```

## Outras informações

Para mais comandos do Angular CLI, utilize:

```bash
ng help
```

Ou acesse a [documentação oficial do Angular CLI](https://angular.dev/tools/cli).
