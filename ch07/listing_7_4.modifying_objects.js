// Modifying Objects
//      Using dot notation

// Listing 7-4: An object with nested properties

const myLocation = {
    city: {
        id: 2643743,
        name: 'London',
        coord: {
            lon: -0.1258,
            lat: 51.5085
        },
        country: 'GB',
        population: 9820000,
        timezone: 3600,
    },
}

console.log("myLocation", myLocation);

console.log("myLocation.city.coord.lat", myLocation.city.coord.lat) ;

console.log("myLocation['city']", myLocation['city']);

console.log("myLocation.city['name']", myLocation.city['name']) ;

console.log("myLocation['city']['name']", myLocation['city']['name']) ;

// myLocation {
//     city: {
//       id: 2643743,
//       name: 'London',
//       coord: { lon: -0.1258, lat: 51.5085 },
//       country: 'GB',
//       population: 9820000,
//       timezone: 3600
//     }
//   }
//   myLocation.city.coord.lat 51.5085
//   myLocation['city'] {
//     id: 2643743,
//     name: 'London',
//     coord: { lon: -0.1258, lat: 51.5085 },
//     country: 'GB',
//     population: 9820000,
//     timezone: 3600
//   }
//   myLocation.city['name'] London
//   myLocation['city']['name'] London