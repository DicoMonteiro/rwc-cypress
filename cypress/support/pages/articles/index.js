import faker from "@faker-js/faker";
import { elements_article } from "./elements"
import Routes from "../../routes"

const title = faker.lorem.words()

class Articles {
    
    acessarFormularioDeNovaPublicacao(){
        cy.get(elements_article.linkNovaPublicacao).click();
    }

    preencherFormulario(){
        cy.get(elements_article.title).type(title);
        cy.get(elements_article.description).type('Cypress');
        cy.get(elements_article.body).type(faker.lorem.paragraph());
        cy.get(elements_article.tagField).type('cypress');
    }

    submeterPublicacao(){
        cy.get(elements_article.button).click();
    }

    validarTituloArtigo(){
        cy.contains(elements_article.validateTitle, title).should('be.visible')
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesresponse) => {
            expect(postArticlesresponse.status).to.eq(200)
        })
        // cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleresponse) => {
        //     expect(getArticlesTitleresponse.status).to.eq(200)
        // })
        // cy.wait(`@${Routes.as.getArticlesComment}`).then((getArticlesCommentsresponse) => {
        //     expect(getArticlesCommentsresponse.status).to.eq(200)
        // })
    }
}

export default new Articles();