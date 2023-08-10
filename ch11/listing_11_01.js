// Listing 11-1. A synchronous program

function count(maxNumber)
{
    let i = 0 ;
    while ( i < maxNumber ) {
        console.log(i);
        i++ ;
    }
}

count(1000);