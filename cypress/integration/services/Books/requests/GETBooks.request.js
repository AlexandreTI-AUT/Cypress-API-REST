/// <reference types="Cypress" />

function allBooks() {
    // cy.request - Client http - comunica com a API
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    })
}

export { allBooks };