const homePage = require('../support/pageObject/homePage/homePage');
const signinPage = require('../support/pageObject/singinPage/signinPage');
const purchasePage = require('../support/pageObject/purchasePage/purchase');
const dataUser = require('../support/dataUser/data');


describe('checkout product', () => {
  it('purchase order', () => {
      homePage.goTohomePage();
      homePage.clisksignMenu();
      signinPage.assertionsigninMenu();
      signinPage.inputloginuserName();
      signinPage.inputloginpassword();
      signinPage.clickButtonsignin();
      signinPage.assertionButtonsignin();
      purchasePage.selectProduct();
      purchasePage.clickAddToCart();
      purchasePage.assertiosAddToCart();
      homePage.backToHomePage();
      purchasePage.clickCart();
      purchasePage.clickPlaceOrderButton();
      purchasePage.assertionButtonPlaceOrder();
      purchasePage.subbmitForm();
      purchasePage.assertionSuccesPurchase();
      
      

    

    
      
      
      
      
      

    });

  
  })
  
  
  
  