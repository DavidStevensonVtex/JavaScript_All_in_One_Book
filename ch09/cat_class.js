class Cat {
    paws = 4 ;
    sound = 'meow' ;
    constructor(name, favoriteToy)
    {
        this.name = name ;
        this.favoriteToy = favoriteToy ;
    }
}

let fuzzy = new Cat ( 'Fuzzy', 'Catnip mouse' ) ;
console.log(fuzzy) ;

// Cat {
//     paws: 4,
//     sound: 'meow',
//     name: 'Fuzzy',
//     favoriteToy: 'Catnip mouse'
//   }