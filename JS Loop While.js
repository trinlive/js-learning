/* JS While Loop */

var i = 0;
console.log(i);

while (i < 10) {
    console.log('number ' + i);
    i++;

}

/* 
    The Do/While Loop 
    The esample below uses a do/while loop. the loop will always be executed at least once,
    even if the condition is false, because the code block is executed before the conditoin is tested:
*/
var i = 0;

do {
    console.log('number' + i);
    i++;
}
while (i < 7);

/* 
    Comparing For and While 
    If you have read the previous chapter, about the for loop,
    you will discover that a while loop is much the same as a for loop, 
    with statement 1 and statement 3 omitted.
    
    The loop in this example uses a for loop to collect the car names from the cars array:
*/

var cars = ["BMW", "Volvo", "Sabb", "Ford"];
console.log(cars);

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var x = 0;
while (cars[x]) {
    console.log(cars[x])
    x++;
}