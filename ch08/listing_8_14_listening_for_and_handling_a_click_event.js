// Listing 8-14. Listening for and handling a click event.

const shoppingCart = {
    itemsInCart: [ 'The Great Gatsby' ],
    handleClick() {
        // do something here
    },
    displayCart() {
        const renderTarget = document.getElementById('cart') ;
        const itemsInCart = this.itemsInCart.map(item => `<p>${item}{/p>`);
        const checkoutButton = "<button id='checkout'>Check out</button>";

        renderTarget.innerHTML = itemsInCart.join('') + checkoutButton;
        document.getElementById('checkout').addEventListener('click', () => this.handlClick());
    }
}