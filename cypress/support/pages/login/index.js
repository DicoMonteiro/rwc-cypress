import { elements_login } from "./elements"

class Login {

    acessarPaginaLogin(){
        cy.visit('login');
    }

    preencherCamposLogin(){
        cy.get(elements_login.inputEmail).type(Cypress.config().user.email);
        cy.get(elements_login.inputPassword).type(Cypress.config().user.password);
    }

    submeterLogin(){
        cy.get(elements_login.button).click();
    }

    verificaUsuarioLogado(){
        cy.get('a[href*=Adriano]').should('be.visible')
    }
}

export default new Login();