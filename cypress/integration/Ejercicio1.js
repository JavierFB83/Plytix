/// <reference types="cypress" />

describe('How many elements are in the table', () => {
    beforeEach(() => {
    cy.visit ("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    })

it ("5 elements in the table",()=>{
    cy.get('li').children().should('have.length', 5)

})

it ("4 elements in the table",()=>{
    cy.get('li').children().should('have.length', 4)

    })

 it ("3 elements in the table",()=>{
    cy.get('li').children().should('have.length', 3)
    
     })
})
