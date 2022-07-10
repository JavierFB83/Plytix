/// <reference types="cypress" />

describe('tests de login', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    })

it ("valid user can login",()=>{

  cy.get('#username').type("tomsmith")
  cy.get('#password').type("SuperSecretPassword!")
  cy.get('.fa').click()
  cy.get('#flash').contains("You logged into a secure area")
})

/// <reference types="cypress" />

it ("invalid user can`t login",()=>{

    cy.get('#username').type("000")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  })

  it ("invalid pasword can`t login",()=>{

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("000")
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your password is invalid!")
  })

})
  