import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Delete a Book', () => {
        GETBooks.allBooks().then((resAllBooks)=> {
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })

        }) 

    });

    it('Add and Delete a Book', () => {
        POSTBooks.addBook().then((resAddBook)=> {
            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook)=> {
                expect(resDeleteBook.status).to.eq(200);

            })
        })

    })
});
