function greetInSpanish(name) {
    return `Hola, ${name}` ;
}

function getUserName(callback)
{
    let firstName = 'David' ;
    return callback(firstName);
}

console.log(getUserName(greetInSpanish));