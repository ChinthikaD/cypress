/// <reference types="cypress" />

describe('example to-do app', () => {

    it('login test', function () {
        cy.visit('https://qaapp.xyicon.com/#auth/login')
        cy.get('#userName').type('cdassanayake')
        cy.get('#pwInput').type('aaaa1111')
        cy.get('.primary').click()
        cy.get('[data-cy="Button.Create"]').click()
        // cy.get('.element > .ClickToEditInput > .unfocused').type('new portfolio')

        // cy.wait(5000);

        // cy.contains('span', 'Name').closest('div').parent().find('.unfocused').click();
        cy.contains('span', 'Name').closest('div').parent().find('.element')
            .invoke('html')
            .then((innerHtml) => {
                cy.log(innerHtml); // shows in Cypress UI
                console.log(innerHtml); // shows in browser's dev console
            });
        cy.get('.ClickToEditInput > .field-input-container > input').type('samplename')

        


    }

    )
})