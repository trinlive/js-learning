// Arithmetic Operators

console.log(5 + 25); // 30
console.log(40 - 10); // 30
console.log(3 * 100); // 300

console.log(300 / 10); // 30
console.log(1 / 2); // 0.5
console.log(1.2 / 1.0); // 1.2
console.log(30.0 / 1.0); // 30 (Getting an interger, not a decimal)
console.log(1 / 0); // Infinity
console.log(1 / 0.0); // Infinity
console.log(1 / -0.0); // - Infinity

console.log(33 % 10); // 3
console.log(-33 % 10); // -3

var a = 10;
console.log(++a); // 11

var b = 10;
console.log(b++); // 10

var c = 10
console.log(--c); // 9

var d = 10
console.log(d--); // 10

console.log(+30); // 30
console.log(+30.11); // 30.11
console.log(+null); // null
console.log(+Infinity); // Infinity

console.log(-30); // -30
console.log(-30.11); // -30.11
console.log(-null); // null
console.log(-Infinity) // -Infinity

// boolean  true = 1 and false = 0
console.log(true + 0); // 1
console.log(false + false); // 0
console.log(100 - true); // 99
console.log(true * 30); // 30
console.log(true / 2) // 0.5
console.log(true % 10) // 1
console.log(+ true); // 1
console.log(- false) // 0

var a = false, b = true;
console.log(++a); // 1
console.log(a++); // 1

console.log(--b); // 0
console.log(b--); // 0

/* NaN */
console.log(NaN + 30); // NaN
console.log(NaN - 30); // NaN
console.log(NaN * 30); // NaN
console.log(NaN / 30); // NaN
console.log(NaN % 30); // NaN
console.log(+NaN); // NaN
console.log(-NaN); // NaN

var x = NaN;
console.log(++x); // NaN
console.log(--x); // NaN


/* Infinity */
console.log(Infinity * 0); // NaN
console.log(Infinity * 1); // Infinity
console.log(Infinity * Infinity); // Infinity
console.log(Infinity * -Infinity); // -Infinity
console.log(Infinity / 0); // Infinity


/* Assignment Operators */
var a = 20;
a += 10; // like x = x + y
console.log(a); // 30

var a = 20;
a -= 10; // like x = x - y
console.log(a); // 10

var a = 20;
a *= 10; // like x = x * y
console.log(a); // 200

var a = 20;
a /= 10; // like x = x / y
console.log(a); // 2

var a = 20;
a %= 10; // like x = x % y
console.log(a); // 0

/* 
    Operatos in the table above This can be used with a Boolean data type, 
    or it will get the same performance as when used. Mathematical operators
*/
var a = 20;
a += true; // like x = x + y
console.log(a); // 21

a *= NaN;
console.log(a); // NaN


/* Operator use in string */

console.log("foo" + "bar"); // "foobar"
console.log("foo" + true); // "footrue"
console.log(100 + "foo"); // "100foo"
console.log("foo" + 5); // "foo5" 

/*
    - * / % -= *= /= %= and (+string) (-string)
    If my text in the string is a number will be converted to numbers first
    And then proceed according to the respective operator
    But if it's not a number, you'll get an NaN instead.
*/

console.log("10" - 10); // 0
console.log("foo" - 10); // NaN
console.log("10" * 10); // 100
console.log("foo" * 10); // NaN
console.log("10" / 10); // 1
console.log("foo" / 10); // NaN
console.log("11" % 10); // 1
console.log("foo" % 10); // NaN
console.log(+"1" + 1); // 2
console.log(+"foo"); // NaN
console.log(-"1" + 1) // 0
console.log("foo"); // NaN

var a = "10";
a -= 1;
console.log(a); // 9

var b = "foo";
b -= "1";
console.log(b); // NaN


/* Comparison Operators */

console.log(10 == 2); // false
console.log("10" == 10); // true 
console.log(10 == '10') // true
console.log(1 == true); // true
console.log(0 == false); // true
console.log(null == undefined); // true
console.log("foo" == "foo"); // true

console.log(10 != 2); // true
console.log(10 != "10"); // false
console.log(10 != '10'); // false
console.log(1 != true); // false
console.log(0 != false) // false
console.log("foo" != "foo") // false

console.log(10 === 10); // true
console.log("10" === 10) // false
console.log(1 === true) // false
console.log("foo" === "foo") // true
console.log("😂" === "😂") // true


