/// <reference types="cypress" />

import cadastro from "../support/pages/cadastro"

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessarPaginaCadastro()
        cadastro.preencherFormulario()
        cadastro.submeterPublicacao()
        cadastro.validarNomeUsuario()
    });
});