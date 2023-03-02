import {Cadastro} from '../../../../page-objects';

describe('Cadastro de empresa',() =>{

    before(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://homologacao.sittax.com.br/login');
    
    })

    it('Logar na ferramenta', () => {
        const cadastro = new Cadastro();

        cy.login('sistema@sittax.com.br', '5992d3bc9bbe3b6c6sittaxd7d0167e55021' );

        cadastro.irParaURLc();
        cadastro.novaEmpresa();
        cadastro.cadastroCNPJ('23.630.455/0001-96');
        cadastro.buscarCNPJ();
        cadastro.salvarCadastro();
    })


})