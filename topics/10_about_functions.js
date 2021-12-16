module("About Functions (topics/10_about_functions.js)");

test("defining functions directly", function() {
    var result = "a";

    // functions are containers for code, to be run and re-run later
    // This is just a definition; the code in { curly braces } is not run until
    // the function is 'called' later
    function changeResult() {
        result = "b";
    }

    // When a function is called, using parentheses like this, it runs the code in its curly braces
    changeResult();

    expect( __ ).toEqual(result);
});

test("Assigning functions to variables", function() {
    var result = 1;
    // functions can be stored in variables, too
    var changeResult = function () {
        result += 1;
    }

    // functions are often called many times
    changeResult();
    changeResult();
    changeResult();

    expect( __ ).toEqual(result);
});

test("Functions with input parameters", function() {

    // functions can receive inputs and return outputs
    var triple = function(input) {
        var output = input * 3;
        return output;
    };

    var result = triple(4);

    expect( __ ).toEqual(result);
});

test("Functions with multiple parameters", function() {

    // functions can have many input parameters, separated by commas
    var concatenate = function(string1, string2) {
        return string1 + " " + string2;
    };

    var result = concatenate("My", "Inputs");

    expect( __ ).toEqual(result);
});

test("Fat Arrow Notation", function() {

    // functions can also be written using this () => { } shorthand
    // it's called fat-arrow or lambda notation
    // Functions are so commonly written that shorthands are very useful
    var concatenate = (string1, string2) => {
        return string1 + " " + string2;
    };

    var result = concatenate("My", "Inputs");

    expect( __ ).toEqual(result);
});

test("Fat Arrow simple returns", function() {

    // if you only have one input to a fat arrow function, you can leave out the input parens ()
    // if you only have one line of code to execute, you can leave out the { curly braces } and the return.
    // the fat arrow function will return the value of that single line of code
    // This makes small functions extremely streamlined
    var square = number => number * number;

    var result = square(4);

    expect( __ ).toEqual(result);
});

test("Closure scope", function() {
    var result = "a";
    var changeResult = () => {
        // changeResult() can access the variable 'result' even though it is defined in
        //    a different set of { curly braces }.
        // The ability to access a variables defined outside the function is called 'closure'.
        // In some cases, this allow you to do things like edit a variable from an entirely different file.
        result = "b";
    }
    changeResult();

    expect( __ ).toEqual(result);
});

test("Writing functions", function() {

    const value1 = 0;
    const value2 = 2;

    // Write a function, using any of the function definition notations from the previous tests
    // It should update value1 and value2 to make the tests pass below
    var valueUpdater = __

    // valueUpdater function has been defined, but not yet run here
    expect(value1).toEqual(0);
    expect(value2).toEqual(2);

    valueUpdater(); // your function is run here

    expect(value1).toEqual(5);
    expect(value2).toEqual(4);

    // Hint: what happens to the expected values each time the valueUpdater function is called?
    valueUpdater();

    expect(value1).toEqual(10);
    expect(value2).toEqual(8);

    valueUpdater();

    expect(value1).toEqual(15);
    expect(value2).toEqual(16);
});

