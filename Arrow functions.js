/*
    Arrow functions 
    An arrow function expression has a shorter sysntax than a function expression and does not have
    its own this, arguments, super, or new.target. These function expressions are best suited for
    non-method functions, and they canont be used as constructors.

*/

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(materials.map(materials => materials.length));
// expected output: Array [8, 6, 7, 9]


// Shorter functions

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function (element) {
    return element.length;
}); // [8, 6, 7, 9]

elements.map(element => {
    return element.length;
}) // [8, 6, 7, 9]

console.log(elements.map(element => element.length)); // [8, 6, 7, 9]
console.log(elements.map(({ length }) => length)); // [8, 6, 7, 9]