// Listing 9-2. Deriving a class from a base class.

class Beverage {
    constructor ( size, temperature ) {
        this.size = size ;
        this.temperature = temperature ;
    }
}

class Coffee extends Beverage {
    constructor ( size, temperature, hasCaffeine, howYouTakeIt )
    {
        super ( size, temperature ) ;
        this.hasCaffeine = hasCaffeine ;
        this.howYouTakeIt = howYouTakeIt;
    }
}

const morningCoffee = new Coffee ( '64oz', 'hot', true, 'black' ) ;

console.log(morningCoffee) ;

// Coffee {
//     size: '64oz',
//     temperature: 'hot',
//     hasCaffeine: true,
//     howYouTakeIt: 'black'
//   }