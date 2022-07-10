/// <reference types="cypress" />

it ("pagina principal", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")
    cy.get(".new-todo").type("text").type("{enter}")
    cy.get('<button class="destroy"></button>').click({ force: true })
    
})


