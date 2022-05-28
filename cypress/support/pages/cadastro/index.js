import faker from "@faker-js/faker";
import { elements_cadastro } from "./elements"

const title = faker.lorem.words()

const firstName = faker.name.firstName()

class Cadastro {
    
    acessarPaginaCadastro(){
        cy.visit('register');
    }

    preencherFormulario(){
        cy.get(elements_cadastro.inputName).type(firstName + ' ' + faker.name.lastName());
        cy.get(elements_cadastro.inputEmail).type(faker.internet.email());
        cy.get(elements_cadastro.inputPassword).type('pwd123');
    }

    submeterPublicacao(){
        cy.get(elements_cadastro.button).click();
    }

    validarNomeUsuario(){
        cy.get(`a[href*=${firstName}]`).should('be.visible')
    }
}

export default new Cadastro();