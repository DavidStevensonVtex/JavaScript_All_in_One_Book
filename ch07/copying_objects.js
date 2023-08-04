const document = {
    city: 'London',
    country: 'Great Britain',
    population: 9820000,
    longitude: -0.1258,
    latitude: 51.5085

}

const document2 = { ...document } ;
const document3 = document ;

console.log("document == document2", document == document2);
console.log("document === document2", document === document2) ;

console.log("document == document3", document == document3);
console.log("document === document3", document === document3) ;

console.log("document", document);
console.log("document2", document2) ;

// document == document2 false
// document === document2 false
// document == document3 true
// document === document3 true
// document {
//   city: 'London',
//   country: 'Great Britain',
//   population: 9820000,
//   longitude: -0.1258,
//   latitude: 51.5085
// }
// document2 {
//   city: 'London',
//   country: 'Great Britain',
//   population: 9820000,
//   longitude: -0.1258,
//   latitude: 51.5085
// }