
module("About Assignment (topics/05_about_assignment.js)");
var fileScopeVariable = "you can declare variables almost anywhere";

test("Local variables", function() {
    // normally, variables are only accessible inside the { curly braces } where they are defined
    var temp = __;

    expect(temp).toEqual(1);
});

test("File scope variables", function() {
    // Where does the value of fileScopeVariable come from?
    expect("__").toEqual(fileScopeVariable);
});

test("global variables", function() {
    // if you don't use 'var' or another keyword when first using a variable,
    // JavaScript treats it as a global variable: accessible ANYWHERE
    // global variables are assigned to the 'window' object
    unZenVariable = 1;

    expect(window.__).toEqual(unZenVariable);

    // Note that you should almost never use global variables in practice,
    // too many weird things can happen when a variable is always in scope for all code
});

test("global variables continued", function() {
    unZenVariable++;

    expect(window.__).toEqual(2);
});

test("writing variables", function() {
    // using the notation from previous unit tests, write two new
    // variables, and assign their values to make the expect() pass

    __ = __;

    __ = __;

    expect(myVariable).toEqual(5);
    expect(myOtherVariable).toEqual(3.14);

    // did you properly declare your variables?
    expect(window.myVariable).toEqual(undefined);
});
