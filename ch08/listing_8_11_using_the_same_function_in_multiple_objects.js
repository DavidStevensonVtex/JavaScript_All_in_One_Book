// Listing 8-11. Using the same function in multiple objects (callbacks)

const myCar = {
    speed: 0,
    operate ( speedLimit, callback ) {
        boundCallback = callback.bind(this);
        boundCallback(speedLimit) ;
        console.log(`myCar is driving at ${this.speed}`);
    }
}

function drive(speed) {
    this.speed = speed ;
    console.log(`Driving at ${this.speed}`);
}

myCar.operate(55, drive);

// Driving at 55
// myCar is driving at 55