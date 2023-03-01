class LoginPage{

    constructor(){
        this.EmailField = cy.get('#emailUsuarioAuth');
        this.PassField = cy.get('#passwordUsuarioAuth');
        this.LoginButton = cy.get('.btn');
    }

    login(mail, pass){
        this.EmailField.type(mail);
        this.PassField.type(pass);
        this.LoginButton.click();
    }
}
export default LoginPage