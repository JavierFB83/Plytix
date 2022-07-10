/// <reference types="cypress" />

export class homePage {

    gotohomepage(){
        cy.visit("https://the-internet.herokuapp.com/")
    }

    clicklogin () {
        cy.get(':nth-child(21) > a').click()
    }
}
