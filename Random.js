//Math.random() always returns a number lower than 1
console.log(Math.random());

//JS random integers return a rnadom integer form 0 to 9
console.log(Math.floor(Math.random() * 10));

//JS random integers return a rnadom integer form 0 to 99
console.log(Math.floor(Math.random() * 100));

/*
    A proper Random Function
    As you can see from the examples above, it might be a good idea to
    create a proper random function to use for all random integer purposes.

    This JS function always returns a random number between min(included)
    and max (excluded)
*/

function getRadInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRadInteger(0, 79));
