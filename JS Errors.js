/*
    JS Errors - Throw and Try to Catch

    The try statement lets you test a block of code for errors.
    The catch statement lets you handle the error.
    The throw statement lets you create custome errors.
    The finally statement lets you execute code, after try and catch, regardless of the result.
*/

/* 
    Throwing ageneric error
    Usually you create an Error object with the intention of raising it using the throw keyword.
    You can handle the error using the try.. catch construct:
*/
try {
    throw new Error('Whoops!');
} catch (e) {
    console.log(e.name + ': ' + e.message);
}

/*
    Handling a specific error
    You can choose to handle only specific error types by testing the error type with the error's
    constructor property of, if you're writing for modern JS engines, instanceof keyword:
*/

try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        console.log(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
        console.log(e.name + ': ' + e.message);
    }
    // ... etc
}