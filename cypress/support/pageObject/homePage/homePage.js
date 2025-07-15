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

    backToHomePage () {
    // Kembali ke halaman utama dari halaman detail produk
      cy.xpath('//a[@class="navbar-brand"]').click(); // Klik "PRODUCT STORE"
      cy.wait(2000)
    }

}

module.exports = new homePage();