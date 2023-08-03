const animalNames = [
    'aardvark',
    'alligator',
    'alpaca',
    'bear',
    'beaver',
    'cat',
    'dog',
    'elephant',
];

const animalsStartingWithA = animalNames.filter( (animal) => animal.startsWith('a')) ;
console.log(animalsStartingWithA);
// [ 'aardvark', 'alligator', 'alpaca' ]