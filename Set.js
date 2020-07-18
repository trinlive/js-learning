/* Removing duplicates with a Set */

// An Array with duplicated elements
const cities = ['London', 'New York', 'Sofia', 'Sofia'];
console.log(typeof (cities)); // object

// The Set will automatically remove duplicates
const citiesSet = new Set(cities);
console.log(citiesSet); // Set { 'London', 'New York', 'Sofia' }
console.log(typeof citiesSet); // object

// Create back an array
const uniqueCities = Array.from(citiesSet);
console.log(uniqueCities); // [ 'London', 'New York', 'Sofia' ]
console.log(typeof (uniqueCities)); // object