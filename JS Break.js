/* 
    JS Break and Continue 
    The Break Statement
    You have already seen the break statement used in an earlier chapter of this 
    tutorial. It was used to "jump out" of a swithc() statement. 
    
    The break statement can also be used to jump out of a loop.
    the break statement breaks the loop and continues executing the
    code after the loop (if any):
*/

for (i = 0; i < 10; i++) {
    if (i === 5) { break; }
    console.log(i);
}


/* 
    The Continue Statement 
    The continue statement breaks one iteration (in the loop),
    if a specified condition occurs, and continues with the next iteration in the loop.
*/

for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log(i);
}

/* 
    JS Labels
    to label JS statements you precede the statements with a label name and colon:
    The break and the continue statements are the only JS statements that can "jump out of" 
    a code block.

    The continue statement (with or without a label reference) can only be used to skip one loop iteration.
    The break statement, without a label reference, can only be used to jump out of a loop or a swithc.
    With a lable reference, the break statement can be used to jump out of any code block:
*/


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
    text += cars[0]; console.log(text);
    text += cars[1]; console.log(text);
    break list;
    text += cars[2]; console.log(text);
    text += cars[3]; console.log(text);
}
