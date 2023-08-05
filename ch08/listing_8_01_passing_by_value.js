const favoriteFood = 'tacos' ;

makeDinner ( favoriteFood) ;

console.log("favoriteFood: ", favoriteFood);

function makeDinner(whatToMake)
{
    console.log(`I see you want ${whatToMake}`);
    whatToMake = 'salad' ;
    console.log(`I've decided to make ${whatToMake} isntead.`);
}

// I see you want tacos
// I've decided to make salad isntead.
// favoriteFood:  tacos