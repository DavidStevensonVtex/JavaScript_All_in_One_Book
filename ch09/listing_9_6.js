// Listing 9-6. Creating a class with public, private, and static fields

class Cat {
    static species = 'Felis catus' ;
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

    play() {
        console.log(`Playing with ${this.favoriteToy}`);
        this.#takeNap();
    }

    #takeNap()
    {
        this.#isSleeping = true ;
    }
}


console.log("Cat.species", Cat.species);

let fuzzy = new Cat ( 'Fuzzy', 'Catnip mouse' ) ;
console.log(fuzzy) ;
fuzzy.play();

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

// Cat.species Felis catus
// Cat {
//   paws: 4,
//   sound: 'meow',
//   name: 'Fuzzy',
//   favoriteToy: 'Catnip mouse'
// }
// Playing with Catnip mouse

// Attempt to herd a cat
// You can't do that.