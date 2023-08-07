const pickAMovie1 = function(choices) {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick ;
}

// If an arrow function takes only one parameter, you can eliminate the parentheses around the argument.
// If an arrow function contains only a return statement, you can eliminate the curly braces.

const pickAMovie2 = choices => 
    choices[Math.floor(Math.random() * choices.length)];

choices = [ 'one', 'two', 'three', 'four', 'five' ] ;
console.log("pickAMovie1: ", pickAMovie1(choices)) ;
console.log("pickAMovie2: ", pickAMovie2(choices)) ;

// pickAMovie1:  two
// pickAMovie2:  three