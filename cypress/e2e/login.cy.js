describe('login', () => {
  it('Successful login with valid username and password', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.xpath('//a[@id="login2"]').click();
    cy.xpath('//h5[@id="logInModalLabel"]').should('exist');
    cy.wait(5000);
    cy.xpath('//input[@id="loginusername"]').type('rifki1993');
    cy.wait(5000);
    cy.xpath('//input[@id="loginpassword"]').type('Bandung1993!');
    cy.wait(5000);
    cy.xpath('//button[@onclick="logIn()"]').click();
    cy.xpath('//a[@id="nameofuser"]').should('exist');
  })
  
  it('User should not be able to log in with invalid credentials', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.xpath('//a[@id="login2"]').click();
    cy.xpath('//h5[@id="logInModalLabel"]').should('exist');
    cy.wait(5000);
    cy.xpath('//input[@id="loginusername"]').type('rifki1993');
    cy.wait(5000);
    cy.xpath('//input[@id="loginpassword"]').type('salahpass!');
    cy.wait(5000);
    cy.xpath('//button[@onclick="logIn()"]').click();
    cy.xpath('//a[@id="nameofuser"]').should('not.be.visible');
  })

})