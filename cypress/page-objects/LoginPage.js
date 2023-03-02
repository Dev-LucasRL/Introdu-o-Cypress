class LoginPage{

    constructor(){
        this.EmailField = cy.get('#emailUsuarioAuth');
        this.PassField = cy.get('#passwordUsuarioAuth');
        this.LoginButton = cy.get('.btn');
    }

    digitarEmail(mail){
        this.EmailField.type(mail);

    }

    digitarPass(pass){
        this.PassField.type(pass);
    }

    loginButton(){
        this.LoginButton.click();
    }
}
export default LoginPage;