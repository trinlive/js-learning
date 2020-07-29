//Creating Boolean objects with an ititial value of false
var dNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);


console.log(dNoParam);  //false
console.log(bZero);     //false
console.log(bNull);     //false
console.log(bEmptyString);  //false
console.log(bfalse);        //false


//Create Boolean objects with an initial value of true
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});

console.log(btrue);         // true
console.log(btrueString);   // true
console.log(bfalseString);  // true
console.log(bSuLin);        // true
console.log(bArrayProto);   // true
console.log(bObjProto);     // true
