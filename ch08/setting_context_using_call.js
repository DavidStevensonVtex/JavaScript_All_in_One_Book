// Setting the context of a function: Using call()

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

drive.call(myTruck, 45) ;
drive.call(myCar, 55);

console.log("myTruck.speed", myTruck.speed);
console.log("myCar.speed", myCar.speed);

// Driving at 45 mph.
// Driving at 55 mph.
// myTruck.speed 45
// myCar.speed 55