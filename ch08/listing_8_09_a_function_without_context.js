// Listing 8-9. A function without context

const myTruck = {
    speed: 0
}

const myCar = {
    speed: 0
}

function drive ( speedLimit ) {
    this.speed = speedLimit
    console.log(`Driving at ${this.speed} mph.`);
}

drive(55) ;

console.log("myCar.speed", myCar.speed);
console.log("myTruck.speed", myTruck.speed);

// Driving at 55 mph.
// myCar.speed 0
// myTruck.speed 0