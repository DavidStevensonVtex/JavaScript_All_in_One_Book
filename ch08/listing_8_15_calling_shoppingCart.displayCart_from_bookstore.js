// Listing 8-15. Calling shoppingCart.displayCart() from bookstore

const bookstore = {
    books: [ 'Ulysses', 'The Great Gatsby' ],
    removeBook(title) {
        let newList = this.books.filter( (book) => book != title ) ;
        this.books = newList ;
        this.displayBookstore();
    },
    displayBookstore() {
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`);
        renderTarget.innerHTML = booklist.join('') ;

        shoppingCart.displayCart(this.removeBook.bind(this));
    }
}