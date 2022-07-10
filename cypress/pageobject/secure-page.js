/// <reference types="cypress" />

export class SecurePage {
CheckMessage(text)  {
cy.get("#flash").contains(text)
    }
}