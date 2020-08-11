/* 
    RegExp
    The RegExp constructor creates a regular expression object for matching text with a pattern.
    For an introduction to regular expressions.
*/

const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');

console.log(regex1);  // /\w+/
console.log(regex2);  // /\w+/
console.log(regex1 === regex2) // false


/*
    Using a regular expression to change data format  

    The follwing script uses the replace() method of the String instance to match a name in
    the format first last and output it in the format last, first. in the replacement text,
    the script uses $1 and $2 to indicate the results of the corresponding matching parentheses 
    regular expression pattern
*/

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr); // Smith, John


/* 
    Using regular expression to split lines with different line endings/ends of line/line breaks
    The default line ending varies depending on the platform (Unix, Windows, etc.)
    The line splitting provided in this example works on all platforms.
*/

var text = 'Some txt\nAnd some more\r\nAnd yet\rThis is the end';
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'some text', 'And some more', 'And yet', 'This is the end' ]



