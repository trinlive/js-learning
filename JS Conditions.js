
x = new Date().getHours();
console.log(x);
console.log(typeof (x));

if (new Date().getHours() > 99) {
    console.log('Good day');

} else if (x > 12) {
    console.log('Hey how are you.');

} else {
    console.log('Good evening');
}

