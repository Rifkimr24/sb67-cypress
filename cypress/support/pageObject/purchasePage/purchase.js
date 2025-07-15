const dataUser = require('/Users/lenovo/sb67-cypress/cypress/support/dataUser/data');

class purchasePage {

    selectProduct () {
        cy.xpath('//a[contains(text(),"Samsung galaxy s6")]')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
    }

    clickAddToCart () {
    cy.get('.col-sm-12 > .btn').click();
    }

    assertiosAddToCart () {
     // Tangani alert
      cy.on('window:alert', (alertText) => {
      expect(alertText.trim()).to.equal('Product added');
      cy.wait(2000)
      });
    }

    clickCart () {
        // Klik cart
      cy.xpath('//a[@id="cartur"]')
      .click();
    }

    clickPlaceOrderButton () {
        // Tunggu dan klik tombol "Place Order"
      cy.xpath('//button[contains(text(),"Place Order")]')
      .should('be.visible')
      .scrollIntoView()
      .click();
    }

    assertionButtonPlaceOrder () {
        // Verifikasi muncul teks "Place order" (popup)
      cy.xpath('//h5[contains(text(),"Place order")]')
      .should('exist');
    }

    subbmitForm () {
     // Submit username data
      cy.xpath('//input[@id="name"]').type(dataUser.user_name);
      cy.xpath('//input[@id="country"]').type(dataUser.country);
      cy.xpath('//input[@id="city"]').type(dataUser.city);
      cy.xpath('//input[@id="card"]').type(dataUser.credit_card);
      cy.xpath('//input[@id="month"]').type(dataUser.month);
      cy.xpath('//input[@id="year"]').type(dataUser.year);
      cy.xpath('//button[@onclick="purchaseOrder()"]').click();
    }

    assertionSuccesPurchase () {
        // Succes purchase alert
      cy.on('window:alert', (alertText) => {
      expect(alertText.trim()).to.equal('Thank you for your purchase');
      });
    }

}

module.exports = new purchasePage();