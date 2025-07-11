const homePage = require('../support/pageObject/homePage/homePage');
const signinPage = require('../support/pageObject/singinPage/signinPage');
const dataUser = require('../support/dataUser/data');


describe('checkout product', () => {
  it('login user', () => {
      homePage.goTohomePage();
      homePage.clisksignMenu();
      signinPage.assertionsigninMenu();
      signinPage.inputloginuserName();
      signinPage.inputloginpassword();
      signinPage.clickButtonsignin();
      signinPage.assertionButtonsignin();
      
    });
  })
  
  
  
  