/// <reference types="cypress" />

export class todoHOMEPage {

    gotohomepage(){
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }
    add1homework(text) {
        cy.get(".new-todo").type(text).type("{enter}")
    }
    Checklabel(text) {
        cy.get('label').contains(text)
    }
    Filterbycompletedtask() {
        cy.get(':nth-child(3) > a').click()
    }
    FilterbyActivetask() {
        cy.get(':nth-child(2) > a').click()
    }
    Markcompleted() {
        cy.get('.toggle').click()
    }
    Clearcompleted() {
        cy.get('.clear-completed').click()
    }
    Nolabel() {
        cy.get('label').should('not.exist') 
    }
    Taskleft(text) {
        cy.get('.footer').contains(text)
    }
    Labelnumber(text) {
    cy.get('label').should('have.length', text)
    }
    Markcompleted() {
    cy.get(':nth-child (3) > .view > .toggle').click()
    }
}

