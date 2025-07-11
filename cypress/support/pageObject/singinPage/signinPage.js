const { valid_username, valid_password, invalid_password } = require('../../dataUser/data');
const dataUser = require('/Users/lenovo/sb67-cypress/cypress/support/dataUser/data');

class signinPage {

    assertionsigninMenu() {
    cy.xpath('//h5[@id="logInModalLabel"]').should('exist');
    }
    
    inputloginuserName() {
    cy.wait(2000);
    cy.xpath('//input[@id="loginusername"]').type(valid_username);
    }

    inputloginpassword() {
    cy.wait(2000);
    cy.xpath('//input[@id="loginpassword"]').type(valid_password);
    cy.wait(2000);
    }

    inputloginInvalidpassword() {
    cy.wait(2000);
    cy.xpath('//input[@id="loginpassword"]').type(invalid_password);
    cy.wait(2000);
    }

    clickButtonsignin() {
    cy.xpath('//button[@onclick="logIn()"]').click();
    }

    assertionButtonsignin() {
    cy.xpath('//a[@id="nameofuser"]').should('exist');
    }

    assertionInvalidPassword() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Wrong password.');
    });
}

}

module.exports = new signinPage();