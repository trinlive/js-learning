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
console.log(Number.parseFloat("abc")) // NaN

/* Not Use Object Number*/
console.log(parseInt("86")); // 86
console.log(parseFloat("344.23")) // 344.23
console.log(typeof (global.parseInt)); // function
console.log(typeof (global.parseFloat)); // function


/* 
    Base number 2, base 8 and base 16
    Binary literals Base Number2 use 0b or 0B Prefix numbers.
    Octal literals Base Number8 use 0o or 0O Prefix numbers.
    Hexadecimal literal Base Number16 0x or 0X Prefix numbers.

    In the example, it can be seen that Number() can be used to convert
    strings written as base 2, 8, and 16 into decimal numbers, but when
    using Number.paresInt() with string written as base2 and 8, the result is 0.
*/
console.log(Number("100")); // 100
console.log(Number("0b111")); // 7
console.log(Number("0o45")); // 37
console.log(Number("0x17")); // 23
console.log(Number.parseInt("100")); // 100
console.log(Number.parseInt("0b111")); // 0
console.log(Number.parseInt("0o45")); // 0
console.log(Number.parseInt("0x17")); // 23


/*  20200722
    Number.isFinite() check numbers that have infinite values 
    or -infininter and Number.isNaN() check variable have NaN value 
*/

console.log(isFinite(2020)); // true
console.log(isFinite("2020")); // true
console.log(Number.isFinite(2020)); //true
console.log(Number.isFinite("2020")); // false

console.log(isNaN(NaN)); // true
console.log(isNaN("NaN")); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false

console.log(typeof (global.isFinite)); // function
console.log(typeof (global.isNaN)); // function


/* 
    20200722
    Number.isInteger() aand Number.isSafeInteger()
 
    Integer and decimal numbers in JS are stored in memory in different ways.
    But sometimes decimal numbers are stored as integers. For example, 34.0 contains 0 decimal points.
    At the end, which you might think is a decimal number, but it actually holds an integer 34 (omits decimal).

    But in ES6, adding methods to check numbers Whether it is stored as an integer or not, using Number.isInterger ()
    If checking is an integer, the result will be true, but if not it will be false as in the example.

*/

console.log(Number.isInteger(34.6)); // false
console.log(Number.isInteger(34.0)); // true
console.log(Number.isInteger(34)); // true












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
