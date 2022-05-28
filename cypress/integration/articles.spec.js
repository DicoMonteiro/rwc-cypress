/// <reference types="cypress" />

import articles from "../support/pages/articles"

// especificando a execução desse context em um único browser { browser: "electron" } 
context('Publicação', () => {
    beforeEach(() => {
        cy.backgroundLogin()
    })
    it('Criar um nova publicação', () => {
        articles.preencherFormulario()
        articles.submeterPublicacao()
        articles.validarTituloArtigo()
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
    });
});