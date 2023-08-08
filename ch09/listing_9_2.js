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