// Listing 8-10. Passing an object to a function

const myTruck = {
    speed: 0
}

const myCar = {
    speed: 0
}

function drive ( vehicle, speedLimit ) {
    vehicle.speed = speedLimit
    console.log(`Driving at ${vehicle.speed} mph.`);
}

drive(myTruck, 45) ;
drive(myCar, 55);

console.log("myTruck.speed", myTruck.speed);
console.log("myCar.speed", myCar.speed);

// Driving at 45 mph.
// Driving at 55 mph.
// myTruck.speed 45
// myCar.speed 55