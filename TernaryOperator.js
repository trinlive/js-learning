/* Amateur */
var hungry = false;
var eat;
if (hungry == true) {
    eat = 'yes';

} else {
    eat = 'no';
}

console.log(eat); //no

/* Pro */
var hungry = true;
var eat = hungry == true ? 'yes' : 'no';
console.log(eat); //yes

