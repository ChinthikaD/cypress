/// <reference types="cypress" />

describe('example to-do app', () => {

it('login test', function(){
    cy.visit('https://qaapp.xyicon.com/#auth/login')
    cy.get('#userName').type('cdassanayake')
    cy.get('#pwInput').type('aaaa1111')
    cy.get('.primary').click()
}

)
})