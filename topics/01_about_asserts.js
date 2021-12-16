
module("About Asserts (topics/01_about_asserts.js)");

// This first file is to learn about the basics of the unit test style used in this project
// Replace the blank __ with a value to make the tests pass
// Then save this file and refresh the file "jskoans.htm" in your browser (or hit the little 'rerun test' link)
// (Text that starts with // are comments, ignored when code is run)


// test() is just a function that tells the unit test framework to expect a test
test('what equals 1+1, to satisfy the expect assertion?', function() {

    // expect().toEqual() is a unit test, which will fail (and halt future tests)
    // if the two inputs are not equal
    // There are a lot of possible answers that make this test pass, don't overthink it
    expect( __ ).toEqual( 1 + 1);
});

test("what will satisfy the equality check?", function() {
    // the triple-equals operator returns 'true' only if
    // the things on both sides are exactly the same
    expect( __ === 1).toEqual(true);
});

test('what is a false value?', function() {
    expect( __ === false).toEqual(true);
});

// Strings are just some characters in quotes
// They can be compared and edited by your code
test('string comparisons', function () {
    expect("my string").toEqual( __ );
})
