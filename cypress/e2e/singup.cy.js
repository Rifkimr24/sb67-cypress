describe('SingUp', () => {
  it('User should be able to sign up with valid credentials', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.xpath('//a[@id="signin2"]').click();
    cy.xpath('//h5[@id="signInModalLabel"]').should('exist');
    cy.wait(5000);
    cy.xpath('//input[@id="sign-username"]').type('rifki2025');
    cy.wait(5000);
    cy.xpath('//input[@id="sign-password"]').type('Bandung2025!');
    cy.wait(5000);
    cy.xpath('//button[@onclick="register()"]').click();
    cy.on('window:alert', (text) => {
    expect(text).to.equal('Sign up successful.');
  });
  })
  
  it('User should not be able to sign up with an existing username', () => {
    cy.visit('https://www.demoblaze.com/')
    
    cy.xpath('//a[@id="signin2"]').click();
    cy.xpath('//h5[@id="signInModalLabel"]').should('exist');
    cy.wait(5000);
    cy.xpath('//input[@id="sign-username"]').type('rifki1993');
    cy.wait(5000);
    cy.xpath('//input[@id="sign-password"]').type('Bandung1993!');
    cy.wait(5000);
    cy.xpath('//button[@onclick="register()"]').click();
    cy.on('window:alert', (text) => {
    expect(text).to.equal('This user already exist.');
  });
  })

})