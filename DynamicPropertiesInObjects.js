/* Amateur: */
var dynamic = "value";
var user = {
    id: 1
};
user[dynamic] = "other value";
console.log(user[dynamic]); // other value

/* Pro */
var dynamic = "value";
var user = {
    id: 1
    [dynamic] = "new value"
};
console.log(user[dynamic]);
