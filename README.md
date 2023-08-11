# Projeto Neon - Aplicação Angular

## Descrição

Este projeto consiste em uma aplicação web desenvolvida em Angular para gerenciar informações de usuários e salários.

## Estrutura de Pastas e Arquivos

- **app**: Contém os componentes, serviços e módulos principais da aplicação.
  - **components**: Contém componentes reutilizáveis.
    - **delete-button**: Componente de botão de exclusão.
  - **dashboard**: Componente do painel de controle.
  - **salary-form**: Componente do formulário de salário.
  - **salary-list**: Componente da lista de salários.
  - **user-form**: Componente do formulário de usuário.
  - **users-list**: Componente da lista de usuários.
  - **app.component**: Componente principal da aplicação.
  - **app.module**: Módulo principal da aplicação.
  - **dashboard.service.ts**: Serviço do painel de controle.
  - **salary.service.ts**: Serviço de salário.
  - **user.service.ts**: Serviço de usuário.
- **assets**: Contém arquivos estáticos, como imagens e ícones.
- **index.html**: Página principal da aplicação.
- **main.ts**: Ponto de entrada da aplicação.
- **styles.css**: Estilos globais da aplicação.

## Componentes

1. **Dashboard**: Exibe informações agregadas sobre salários e usuários.
2. **Salary Form**: Permite a criação e edição de registros de salário.
3. **Salary List**: Exibe uma lista de salários.
4. **User Form**: Permite a criação e edição de registros de usuários.
5. **Users List**: Exibe uma lista de usuários.
6. **Delete Button**: Botão de exclusão reutilizável.

## Serviços

1. **Dashboard Service**: Fornece métodos para recuperar dados do painel de controle.
2. **Salary Service**: Fornece métodos para gerenciar salários.
3. **User Service**: Fornece métodos para gerenciar usuários.

## Instruções de Execução

Para executar o projeto Angular, siga os passos abaixo:

1. **Instalar Dependências**: Execute `npm install` para instalar as dependências necessárias.
2. **Iniciar o Servidor de Desenvolvimento**: Execute `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/` no navegador.
