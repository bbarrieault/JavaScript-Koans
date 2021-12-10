module("About Asserts (topics/about_asserts.js)");

// This first file is to learn about the basics of the unit test style used in this project
// Replace the blank __ with a value to make the tests pass
// Then save this file and refresh the file "jskoans.htm" in your browser

test('what equals 1+1, to satisfy the expect assertion?', function() {
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
