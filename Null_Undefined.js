/*
    null with undefined
    Variables in js can have null or undefined data, which means that those variables There is no value kept at all, either
    The two values will have different details as follows:

    - When a variable is stored as an object, when the variable no longer refers to an object, it is assigned to it.
    Has a null value instead

    - When declaring a variable without initializing it, that variable will get the value undefined instead, and in JS it will use
    variable of global named undefined, store the value of undefined again

    In this example, null and undefined if used === comparing equality Will find that it is not equal but if using == comparison
    Will find it equal Also, when using typeof to check that null is displaying "object" different to the undefined displayed
    The word "undefined"
*/

console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(typeof null); // object
console.log(typeof undefined); // undefined
