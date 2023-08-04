const document = {
    city: 'London',
    country: 'Great Britain',
    population: 9820000,
    longitude: -0.1258,
    latitude: 51.5085

}

for ( const property in document ) {
    console.log(`${property}: ${document[property]}`);
} 

// city: London
// country: Great Britain
// population: 9820000
// longitude: -0.1258
// latitude: 51.5085