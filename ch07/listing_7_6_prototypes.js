function Vehicle ( speed ) {
    this.speed = speed ;
    this.moveForward = function() {
        return `Moving forward at ${this.speed}` ;
    }
}

const Automobile = new Vehicle (55) ;
Automobile.wheels = 4 ;
Automobile.engine = 'electric' ;
console.log("Automobile", Automobile);

const Truck = Object.create(Automobile) ;
console.log("Truck", Truck);
console.log("Truck.speed", Truck.speed);
console.log("Truck.wheels", Truck.wheels);
console.log("Truck.engine", Truck.engine);

Automobile.doors = 4 ;
console.log("Truck.doors", Truck.doors);

Truck.doors = 2;
console.log("Truck.doors", Truck.doors);
console.log("Automobile.doors", Automobile.doors);

console.log("Truck.hasOwnProperty('doors')", Truck.hasOwnProperty('doors')) ;
console.log("Truck.hasOwnProperty('speed')", Truck.hasOwnProperty('doors')) ;
console.log("Truck.hasOwnProperty('wheels')", Truck.hasOwnProperty('doors')) ;
console.log("Truck.hasOwnProperty('engine')", Truck.hasOwnProperty('engine')) ;

// Automobile Vehicle {
//     speed: 55,
//     moveForward: [Function (anonymous)],
//     wheels: 4,
//     engine: 'electric'
//   }
//   Truck Vehicle {}
//   Truck.speed 55
//   Truck.wheels 4
//   Truck.engine electric
//   Truck.doors 4
//   Truck.doors 2
//   Automobile.doors 4
//   Truck.hasOwnProperty('doors') true
//   Truck.hasOwnProperty('speed') true
//   Truck.hasOwnProperty('wheels') true
//   Truck.hasOwnProperty('engine') false