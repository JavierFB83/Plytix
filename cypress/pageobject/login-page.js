/// <reference types="cypress" />


export class LoginPage {

    enterUsername(text) {
        cy.get("#username").type(text)
    }

    enterPassword(text) {
        cy.get("#password").type(text)
    }
    clickloginbutton() {
        cy.get(".fa").click()

    }

    checkErrorMessage(text) {
        cy.get("#flash").contains(text)
    }
}