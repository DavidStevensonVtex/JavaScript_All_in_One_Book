// Listing 8-7. Conditionally defining a function using an expression.

function getThere(distance) {
    let estimatedTripDuration ;
    if ( water === true )
    {
        const getSwimTime = function() {
            return distance / 2 ;
        }
        estimatedTripDuration = getSwimTime();
    }
    else
    {
        const getWalkTime = function () {
            return distance / 4 ;
        }

        estimatedTripDuration = getWalkTime() ;
    }

    return estimatedTripDuration ;
}

let water = true ;
let distance = 30 ;

console.log(`It will take ${getThere(distance)} hours to get there.`);

// It will take 15 hours to get there.