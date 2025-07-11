const signupPage = require('../support/pageObject/signupPage/signupPage');
const homePage = require('../support/pageObject/homePage/homePage');
const dataUser = require('../support/dataUser/data');


describe('SingUp', () => {
  it('User should be able to sign up with valid credentials', () => {
    homePage.goTohomePage();
    homePage.clisksignMenu();
    singupPage.assertionSignupMenu();
    signupPage.inputSignupUsername();
    signupPage.inputSignupPassword();
    signupPage.clickButtonSignup();
    signupPage.assertionSignupSuccess();

  })
  
  it('User should not be able to sign up with an existing username', () => {
    homePage.goTohomePage();
    homePage.clisksignMenu();
    singupPage.assertionSignupMenu();
    signupPage.inputExistSignupUsername();
    signupPage.inputExistSignupPassword();
    signupPage.assertionSignupUserExists();
  })

})