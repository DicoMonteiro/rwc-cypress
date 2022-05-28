/// <reference types="cypress" />

import login from "../support/pages/login"

// especificando a execução desse context diferente do firefox { browser: "!firefox" }
context('Login', () => {
    it('Realizar login com sucesso', () => {
        login.acessarPaginaLogin()
        login.preencherCamposLogin()
        login.submeterLogin()
        login.verificaUsuarioLogado()
    });
});