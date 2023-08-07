// Listing 8-16. Using removeBook as the event handler

const shoppingCart = {
    itemsInCart: [ 'The Great Gatsby' ],
    handleClick() {
        removeBook(this.itemsInCart);
    },
    displayCart() {
        const renderTarget = document.getElementById('cart') ;
        const itemsInCart = this.itemsInCart.map(item => `<p>${item}{/p>`);
        const checkoutButton = "<button id='checkout'>Check out</button>";

        renderTarget.innerHTML = itemsInCart.join('') + checkoutButton;
        document.getElementById('checkout').addEventListener('click', () => this.handlClick());
    }
}