
module("About Strings (topics/about_strings.js)");

test("Quote types in strings", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";

    expect( __ ).toEqual(singleQuotedString === doubleQuotedString);
});

test("String concatenation", function() {
    var fruit = "apple";
    var dish = "pie";

    expect( __ ).toEqual(fruit + " " + dish);
});

test("string.length", function() {
    var fruit = "apple";

    expect( __ ).toEqual(fruit.length);
});

test("String methods", function() {
    // All objects in JavaScript will come with functions to access/edit themselves
    // "Google everything" is the secret to development
    // You can also use the browser dev tools console to experiment with code
    //     (right-click on the web page, select "inspect", then open the "console" tab)
    var fruit = "apple pie";

    // What does slice() do on a string such as the variable 'fruit' ?
    // what inputs do you need to give to slice() to make it give the expected result below?
    var result = fruit.slice(0, __ );

    expect( result ).toEqual("apple");
});
