# Backend - Lista de Tarefas

## Visão Geral do Projeto
Este é o **backend** da aplicação de **Lista de Tarefas**, desenvolvido com **Nest.js** e utilizando **MySQL** como banco de dados. Ele fornece uma API REST para gerenciar as tarefas.

## Funcionalidades
- Adicionar, editar, excluir e concluir tarefas.
- Persistência das tarefas em um banco de dados MySQL.
- Endpoints para filtrar tarefas por status (pendente ou concluída).

## Requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- MySQL (versão 8 ou superior)

## Configuração do Projeto
1. Clone o repositório:
   Clone o repositório no seu computador:
   git clone

2. Instale as dependências:

Use o npm ou yarn para instalar as dependências do projeto:

npm install

3. Configure o banco de dados MySQL:

Crie o banco de dados todo_db no MySQL:

CREATE DATABASE todo_db;

Atualize o arquivo .env com as credenciais do banco de dados:

    DB_HOST=localhost
    DB_PORT=4000
    DB_USERNAME=root
    DB_PASSWORD=<SUA_SENHA>
    DB_DATABASE=todo_db

    Certifique-se de substituir <SUA_SENHA> pela senha correta do seu MySQL.

4. Inicie o servidor de desenvolvimento:

Para iniciar o servidor, execute o comando:

npm run start:dev
yarn start:dev

O servidor será iniciado, geralmente na URL http://localhost:4000.
Comandos Disponíveis

    npm run start:dev ou yarn start:dev: Inicia o servidor em modo de desenvolvimento.

Estrutura do Projeto

    src/tasks: Módulo principal que gerencia as operações de tarefas.
    src/database: Configuração do banco de dados e migrações.
    src/app.controller.ts: Controlador principal.
    src/app.module.ts: Configuração principal do aplicativo.

Observações

    Certifique-se de que o banco de dados MySQL está em execução e configurado corretamente.
    O frontend está configurado para acessar a API padrão em http://localhost:4000.