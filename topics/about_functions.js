module("About Functions (topics/about_functions.js)");

test("defining functions directly", function() {
    var result = "a";

    // functions are containers for code, to be run and re-run later
    // This is just a definition, it's code in { curly braces } is not run until
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

    // variables can have many input parameters, separated by commas
    var concatenate = function(string1, string2) {
        return string1 + " " + string2;
    };

    var result = concatenate("My", "Inputs");

    expect( __ ).toEqual(result);
});

test("Closure scope", function() {
    var result = "a";
    function changeResult() {
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

    // Write a function, using the function definition notation from the previous tests
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

