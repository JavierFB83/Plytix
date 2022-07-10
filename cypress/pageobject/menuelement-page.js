/// <reference types="cypress" />

export class menuelementPage {

    clickOnElementContent() {
        cy.get('[href="/shifting_content/menu"]').click()
    }
}