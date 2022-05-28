class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesComment: 'GETArticlesComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        //cy.route('GET', `**/api/articles/title`).as(this.as.getArticlesTitle);
        //cy.route('GET', '**/api/articles/title/comments').as(this.as.getArticlesComment);
    }
}

export default new Routes();