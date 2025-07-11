const homePage = require('../support/pageObject/homePage/homePage');
const signinPage = require('../support/pageObject/singinPage/signinPage');
const dataUser = require('../support/dataUser/data')



describe('signin', () => {
  it('Successful login with valid username and password', () => {
    homePage.goTohomePage();
    homePage.clisksignMenu();
    signinPage.assertionsigninMenu();
    signinPage.inputloginuserName();
    signinPage.inputloginpassword();
    signinPage.clickButtonsignin();
    signinPage.assertionButtonsignin();

  })
  
  it('User should not be able to log in with invalid credentials', () => {
    homePage.goTohomePage();
    homePage.clisksignMenu();
    signinPage.assertionsigninMenu();
    signinPage.inputloginuserName();
    signinPage.inputloginInvalidpassword();
    signinPage.clickButtonsignin();
    signinPage.assertionInvalidPassword();
  })

})