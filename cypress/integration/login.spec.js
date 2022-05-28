/// <reference types="cypress" />

import login from "../support/pages/login"

// especificando a execução desse context diferente do firefox
context('Login', { browser: "!firefox" }, () => {
    it('Realizar login com sucesso', () => {
        login.acessarPaginaLogin()
        login.preencherCamposLogin()
        login.submeterLogin()
        login.verificaUsuarioLogado()
    });
});