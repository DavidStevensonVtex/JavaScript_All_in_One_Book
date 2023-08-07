const pickAMovie1 = function(choices) {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick ;
}

const pickAMovie2 = (choices) => {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick ;
}

choices = [ 'one', 'two', 'three', 'four', 'five' ] ;
console.log("pickAMovie1: ", pickAMovie1(choices)) ;
console.log("pickAMovie2: ", pickAMovie2(choices)) ;

// pickAMovie1:  two
// pickAMovie2:  five