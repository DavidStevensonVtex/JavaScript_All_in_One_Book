// Listing 8-6. Defiing a function using a function expression.

const convertMilesToKm = function ( distanceInMiles) {
    const distanceInKM = distanceInMiles * 1.609 ;
    return distanceInKM ;
}

console.log( "5 miles", convertMilesToKm(5) + " km");
// 5 miles 8.045 km