// Listing 9-5. Creating static members

class Cat {
    #isSleeping = false;
    paws = 4 ;
    sound = 'meow' ;
    constructor(name, favoriteToy)
    {
        this.name = name ;
        this.favoriteToy = favoriteToy ;
    }

    static herd()
    {
        throw new Error(`You can't do that.`);
    }

    #takeNap()
    {
        this.#isSleeping = true ;
    }
}

let fuzzy = new Cat ( 'Fuzzy', 'Catnip mouse' ) ;
console.log(fuzzy) ;

try
{
    console.log("\nAttempt to herd a cat");
    Cat.herd();
}
catch(e)
{
    // console.log(e);
    console.error(e.message);
}

// Cat {
//     paws: 4,
//     sound: 'meow',
//     name: 'Fuzzy',
//     favoriteToy: 'Catnip mouse'
//   }
  
//   Attempt to herd a cat
//   You can't do that.