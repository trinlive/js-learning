console.log(100, 0, -0, -300, 3.14, -78.222);

// 200 x 10 raised to the power 10
console.log(200e5);
// 2 x 10 raised to the power -5
console.log(2E-5);
//Take the square root of -1
console.log(Math.sqrt(-1));
// 0 divided 0 doesn't have a definition
console.log(0 / 0);
// Convert "Hi" to numbers
console.log(parseInt("Hi"))

/* 
    Infinity is a value without boundaries. Or there is no way to end in math
    And in JS, there is a Variable Object Global named "Infinity" which holds that value.
    and NaN is global object to store the Not-A-Number.
*/
console.log(Infinity * Infinity);
console.log(Infinity / Infinity);
console.log(-344 * Infinity);
console.log(3 / Infinity);


/* Normally, Number have a scope to display the following values.*/
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 100);
console.log(Number.MAX_VALUE * 10);
console.log(Number.MAX_VALUE * -10);

/* 
    In the Number.MIN_VALUE is 5e-324 which is not the smallest negative value 
    But is the value of the number closest to 0
*/

console.log(Number.MIN_VALUE);


/* 
    Number is Object Global Convert string to number. use 
    - parseInt() convert string to Integer.
    - parseFloat() covert string to Decimal number. 
 */
console.log(Number.parseInt("15")); // 15
console.log(Number.parseFloat("198.98")); // 198.98
console.log(Number.parseInt("abc")); // NaN
console.log(Number.parseFloat("abc")) //


/* Number To string and string to number */
/* Amateur */
var num = 15;
var s = num.toString(); //number to string
console.log(typeof (s)); //string
console.log(s); // "15"

var n = Number(s); //string to number
console.log(typeof (n)); //number
console.log(n); //15


/* Pro */
var num = 15;
var s = num + ""; //number to string
console.log(s); // "15"
console.log(typeof (s)); //string

var n = +s; //string to number
console.log(typeof (n)); //number 
console.log(n); // 15
