

/* JS ES6 Short Arrow Function */
const Func1 = name1 => `Hi ${name1}`;
console.log(Func1('Teerayut')) // Hi Teerayut

/* JS ES6 Arrow Function in array.map() */
const myArray = ['tony', 'sara', 'tomey', 7];

let Arr1 = myArray.map(item => item);
console.log(Arr1); // [ 'tony', 'sara, 'tomey', 7 ]


/* JS ES6 Default Parameter and Template Literals */
const myFunc = (name, age = 20) => {
    return `Hello ${name} you age is ${age} year old ?`;
}

console.log(myFunc('trin')); // Hell trin you age is 20 year old ?



