class homePage {

    goTohomePage() {
    cy.visit ('https://www.demoblaze.com/')
    }

    clickSingupMenu() {
    cy.xpath('//a[@id="signin2"]').should('be.visible').click();
    }

    clisksignMenu(){
    cy.get('#login2.nav-link').should('be.visible').click();

    }

}

module.exports = new homePage();