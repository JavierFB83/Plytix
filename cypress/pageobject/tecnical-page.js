/// <reference types="cypress" />

export class tecnicalPage {

    findFiveElementsInTheTable() {
            cy.get('li').children().should('have.length', 5)
        }
}