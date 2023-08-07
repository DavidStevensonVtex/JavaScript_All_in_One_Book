const myCar = {
    speed: 0,
    drive: function ( speedLimit ) {
        this.speed = speedLimit ;
        console.log(`Driving at ${this.speed} mph.`);
    }
}

// Another way to define a method

const myCar2 = {
    speed: 0,
    drive ( speedLimit ) {
        this.speed = speedLimit ;
        console.log(`Driving at ${this.speed} mph.`);
    }
}

myCar.drive(55) ;
myCar2.drive(55);

// Driving at 55 mph.
// Driving at 55 mph.