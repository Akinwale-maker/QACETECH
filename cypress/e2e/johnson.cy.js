import {johnson} from "../fixtures/selector.js";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')
    });

    it("LOGIN - I Should be able to sign in my account with valid", function () {
      cy.get(johnson.loginBtn).click()
      cy.get(johnson.emailField).click()
      cy.get(johnson.emailField).type(johnson.emailTxt)
      cy.get(johnson.passwordField).click()
      cy.get(johnson.passwordField).type(johnson.passwordTxt)
      cy.get(johnson.loginButton).click()
      cy.wait(9000)
    //   cy.get(login.loginBtn).click()
    //  //cy.get(login.userName).click()
    //  cy.get(login.userName).type("johnsonakinwale890@gmail.com")
    //  cy.get(login.passWord).type('12345678')
     
    //  cy.get(login.emailInput).type(login.emailText)
    //  cy.get(login.passwordInput).type(login.passwordText)
    //  cy.get(login.logInButton).click()
    })




})
