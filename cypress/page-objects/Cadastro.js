const logoButton = '.brand-logo-collapsed';
const cadastroButton = ':nth-child(2) > [href=""] > span';
const empresaButton = ':nth-child(2) > .sidebar-nav > :nth-child(2) > .ng-star-inserted';
const cnpjField = '.input-group > .form-control';
const searchCNPJ = '.btn > .fa';
const saveCadastro = '.col-sm-6 > .btn';
const novaEmpresaButton = 'Nova Empresa';
const visit = '/cadastros/empresa';


class Cadastro{



    logoClick(){
        cy.get(logoButton).click(); 
    }

    cadastroClick(){
        cy.get(cadastroButton).click();
    }

    empresaClick(){
        cy.get(empresaButton).click();
    }

    novaEmpresa(){
        cy.contains(novaEmpresaButton).click();
        cy.wait(200);
    }    
    cadastroCNPJ(cnpj){
        cy.get(cnpjField).type(cnpj);
    }

    buscarCNPJ(){
        cy.get(searchCNPJ).click();
    }

    salvarCadastro(){
        cy.get(saveCadastro).click();
    }

    irParaURLc(){
        cy.visit(visit);
    }

}
export default Cadastro;