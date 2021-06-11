/// <reference types="Cypress" />

const payloadsChangeBook = require ('../payloads/change-book.json')

function changeBook(idBook){
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'content-type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadsChangeBook

    })

}

export { changeBook };