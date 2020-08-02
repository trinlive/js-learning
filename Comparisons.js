var x = 5;
console.log(x == 8); // false
console.log(x == 5) // true
console.log(x == "5") // true

console.log(x === 5); // true
console.log(x === "5") // false 

console.log(x != 8) // true
console.log(x !== 5) // false
console.log(x !== "5") // true
console.log(x !== 8) // true

console.log(x > 8) // false
console.log(x < 8) // true
console.log(x >= 8) // false
console.log(x <= 8) // true

// logical operators
var x = 6;
var y = 3;

console.log(x < 10 && y > 1); // true
console.log(x == 5 || y == 5) // false
console.log(!(x == y)) // true


// Conditional (Ternary) Operator
var age = 20;
var voteable = (age < 99) ? "Too young":"Old enough";
console.log(voteable); // Too young


// Comparing Different Types
console.log(2 < 12); // true
console.log(2 < "12"); // true
console.log(2 < "John") // false
console.log(2 > "John") // false
console.log("2" < "12") // false
console.log("2" > "12") // false
console.log("2" == "12") // false


