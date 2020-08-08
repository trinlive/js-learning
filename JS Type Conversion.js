/*
    JS Type Conversion 
    Number() converts to a Number, String() converts to a String, Boolean() converts to a Boolean.

    JS Data Types
    In JS there are 5 different data types that can contain values:
    - string
    - number
    - boolean
    - object
    - function

    There are 6 types of objects 
    - object
    - data
    - array
    - string
    - Number
    - Boolean

    And 2 data types that cannot contain values:
*/

/*  
    The typeof Operator
    You can use the typeof operator to find the data type of a JS variable.
*/

console.log(typeof ("John"));
console.log(typeof (3.14));
console.log(typeof (NaN));
console.log(typeof (false));
console.log(typeof ([1, 2, 3, 4]));
console.log(typeof ({ name: 'trin', age: 42 }));
console.log(typeof (new Date()));
console.log(typeof (function () { }));
console.log(typeof (myCar));
console.log(typeof (null));

/* 
    The Data Type of typeof 
    The typeof operator is not a variable. It is an Operator. Operators (+ - * /) 
    do not have any data type.
    But, the typeof operator always returns a string (containing the type of the operand)
*/

/* 
    The constructor Property
    The constructor property returns the constructor function for all JS variables.
*/

console.log("John".constructor); // returns function String()
console.log(3.14.constructor); // returns function Number()
console.log(false.constructor) // returns function Boolean()
console.log([1, 2, 3, 4].constructor); // returns function Array()
console.log({ name: 'John', age: 34, }.constructor); // returns function Object()
console.log(new Date().constructor); // returns function Date()
console.log(function () { }.constructor); // returns function Function()

/* You can check the constructor property to find out if an object is an Array (contains the word "Array"): */
var fruists = ["Banna", "Orange", "Apple", "mango"];
console.log(typeof (fruists));

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;

}

function isArray2(myArray) {
    return myArray.constructor === Array;
}
// This home made isArray() function returns true when used on an array:
console.log(isArray(fruists));
console.log(isArray2(fruists));


var mDate = new Date();
function isDate(myDate) {
    return myDate.constructor === Date;
}
console.log(isDate(mDate));


/* 
    JS Type Conversion
    - By the use of a JS function
    - Automatically by JS itself
*/

/* 
    Converting Numbers to Strings
    The global method String() can convert numbers to strings.
    It can be used on any type of numbers, literals, variables, or expressions:
*/

var x = 123;
var y

y = String(x);
console.log(y);
console.log(typeof (y));


y = String(564.23);
console.log(y);
console.log(typeof (y));


y = String(100 + 345.33);
console.log(y);
console.log(typeof (y));


/*
    Converting Booleans to String
    The global method String() can covert booleans to strings.
*/

console.log(String(false)); // returns "false"
console.log(String(true));  // returns "true"

// The Boolean method toString() does the same.

x = false;
y = true;
console.log(x.toString()); // returns "false"
console.log(y.toString()); // returns "true"


/*
    Converting Dates to Strings
    The global method String() can convert dates to strings.
*/

console.log(String(Date()));
console.log(Date().toString());

/* 
    Converting String to Numbers
    The global method Number() can convert strings to numbers.
    Strings containing numbers (like "3.14") convert to numbers (like 3.14)
    Empty strings convert to 0.

    Anything else converts to NaN (Not a Number).
*/


console.log(Number("3.14"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("99 88"))


/*
    The Unary + Operator
    The unary + operator can be used to convert a variable to a number:
*/

var y = "5";
var x = + y;

console.log(typeof (y));
console.log(typeof (x));


var y1 = "John ";
var x1 = + y1;
console.log(typeof (y1));
console.log(typeof (x1));

/* 
    Converting Dates to Numbers
    The global method Number() can be used to convert dates to numbers.
*/

var d = new Date();
console.log(Number(d));

// The date method getTime() does the same.
var e = new Date();
console.log(e.getTime());


/* 
    Automatic Type Conversion
    When JS tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
    The result is not always what you expect:
*/

console.log(5 + null); // returns 5             because null is converted to 0
console.log("5" + null); // returns "5null"     because null is converted to "null"
console.log("5" + 2);   // returns "52"         because 2 is converted to "2"
console.log("5" - 2);   // returns 3            because "5" is converted to 5
console.log("5" * "2") // returns 10            because "5" and "2" are converted to 5 and 2


/*
    Automatic String Converstion
    JS automatically calls the variable's toString() function when you try to "output" an object or a variable:
*/


/*
    document.getElementById("demo").innerHTML = myVar;
*/

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

// Numbers and booleans are also converted, but this is not very visible:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"