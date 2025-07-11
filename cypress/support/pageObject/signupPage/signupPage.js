const { new_password, new_username } = require('../../dataUser/data');
const dataUser = require('/Users/lenovo/sb67-cypress/cypress/support/dataUser/data');

class SignupPage {

    assertionSignupMenu() {
    cy.xpath('//h5[@id="signInModalLabel"]').should('exist');
    }

    inputSignupUsername() {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-username"]').type(new_username);
    }

    inputSignupPassword() {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-password"]').type(new_password);
    cy.wait(2000);
    }

    inputExistSignupUsername() {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-username"]').type(dataUser.valid_username);
    }
    

    inputExistSignupPassword() {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-password"]').type(dataUser.valid_password);
    }

    clickButtonSignup() {
    cy.wait(2000);
    cy.xpath('//button[@onclick="register()"]').click();
    }

    assertionSignupSuccess() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Sign up successful.');
    });
    }

    assertionSignupUserExists() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('This user already exist.');
    });
  }
}

module.exports = new SignupPage();