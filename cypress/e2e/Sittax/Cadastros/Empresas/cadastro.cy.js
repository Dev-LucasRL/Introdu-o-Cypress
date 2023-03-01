import {LoginPage} from '../../../../page-objects';

describe('Cadastro de empresa',() =>{

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://homologacao.sittax.com.br/login');
    
    })

    it('Logar na ferramenta', () => {
        const loginPage = new LoginPage();
        loginPage.login('pamonha', 'paçoca')
        cy.get('.brand-logo-collapsed > .img-fluid').click();
        cy.get(':nth-child(2) > [href=""] > span').click();
        cy.get(':nth-child(2) > .sidebar-nav > :nth-child(2) > .ng-star-inserted > span').click();
        cy.contains('Nova Empresa').click();
        cy.get('.input-group > .form-control').click().type('07.631.319/0001-64');
        cy.get('.btn > .fa').click();
        cy.get('.col-sm-6 > .btn').click();
    })
})