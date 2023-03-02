import { LoginPage } from "../page-objects";

Cypress.Commands.add('login', (email, pass) => {

    cy.intercept('POST', 'login').as('login');

    const login = new LoginPage();

    login.digitarEmail(email);
    login.digitarPass(pass);
    login.loginButton();
    

    cy.wait('@login');
})

Cypress.commands.add('cadastrarEmpresa', (cnpj) => {

    
})