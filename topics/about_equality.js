
module("About Equality (topics/about_equality.js)");

test("numeric addition", function() {
    expect(3 + __ ).toEqual(7);
});

test("numeric equality", function() {
    expect(3 + __ === 7).toEqual(true);
});

test("numeric INequality", function() {
    // the exclamation point ! means 'not', it inverts the true/false value
    expect(3 + __ !== 7).toEqual(true);
});

// "literal" means a value that is typed out in the code, instead of saved in a variable
test("string literals", function() {
    equal(__, "frankenstein", "quote types are interchangable, but must match at both ends.");
    equal(__, 'frankenstein', "quote types can use both single and double quotes.");
});

// Tests can sometimes have more than one assertion. They all must pass for the test to pass.
// If one assertion is failing, it will correspond to the line number from the error message
test("string concatenation", function() {
    // What will happen if you 'add' strings of characters together?
    expect( __ ).toEqual("3" + "4");
    expect( __ ).toEqual("A" + "B");
});

test("equality test with 'type coercion'", function() {
    // JavaScript will automatically change some 'types' to others for you,
    // when you compare between them using only two equals signs ( == )
    // (Leave the quotes as-is in this test, only edit the underscores)
    expect(3 == "__").toEqual(true);

    //in general, you should always use triple equals ( === ) ( and triple not equals !== )
    // in your code, to avoid unexpected type changing
});

test("equality test WITHOUT type coercion", function() {
    // using the triple equals comparison will disable any type-switching
    // it will only return true if both sides are exactly the same type and value
    expect( __ ).toEqual( 3 === "3" );
});
