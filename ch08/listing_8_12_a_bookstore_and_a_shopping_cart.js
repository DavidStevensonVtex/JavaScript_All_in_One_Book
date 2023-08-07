// Listing 8-12. A bookstore and a shopping cart

const bookstore = {
    books: [ 'Ulysses', 'The Great Gatsby' ],
    displayBookstore() {
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`);
        renderTarget.innerHTML = booklist.join('') ;
    },
    removeBook(title) {
        let newList = this.books.filter((book) => book != title);
        this.books = newList ;
    }
}

console.log(bookstore.books);
bookstore.removeBook('The Great Gatsby') ;
console.log(bookstore.books);

// [ 'Ulysses', 'The Great Gatsby' ]
// [ 'Ulysses' ]