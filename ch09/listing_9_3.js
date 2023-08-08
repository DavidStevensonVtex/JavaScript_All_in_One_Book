// Listing 9-3. Creating a method in a class

class Beverage {
    constructor ( size, temperature ) {
        this.size = size ;
        this.temperature = temperature ;
    }

    drink() {
        if ( this.temperature !== 'scalding' ) {
            console.log('now drinking');
        }
    }
}

const tea = new Beverage ( '16 oz', 'hot' ) ;
tea.drink() ;

// now drinking