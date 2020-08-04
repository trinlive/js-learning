/* 
    JS loops are handy, if you want to run the same code 
    over and over again, each time with a different value. 
    Often this is the case when working with arrays:
*/

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

/*
    Different Kinds of Loops
    JS supports different kinds of loops
    * for - loops through a block of code a number of times
    * for/in - loops through the properties of an object
    * for/of - loops through the values of an iterable object
    * while - loops through a block of code while a specified condition is true
    * do/while - also loops ghrough a block of code while a specified condition is true 
*/

for (i = 0, len = cars.length, text = "  "; i < len; i++) {
    text += cars[i] + " ";
    console.log(text);
}

