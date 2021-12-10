
module("About Truthyness (topics/about_truthyness.js)");

// In JavaScript, every value is either true-like, or false-like
test("truthyness", function() {
    var test = "1";

    // 'true' is truthy, unsurprisingly
    if( true ) {
        test = "2";
    }

    expect( __ ).toEqual(test);
});

test("truthyness of positive numbers", function() {
    var test = "A";

    // since every value is either truthy or falsey, you can use any value as a condition
    if( 1 ) {
        test = "B";
    }

    expect( __ ).toEqual(test);
});

test("truthyness conversion", function() {
    var test = 99;

    // not ( ! ) inverts the true/false value
    expect( __ ).toEqual( !test );

    // inverting the truthy/falsey value TWICE is the same as asking "is this truthy?"
    expect( __ ).toEqual( !!test );
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;

    expect( __ ).toEqual(negativeOneIsTruthy);
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;

    expect( __ ).toEqual(zeroIsTruthy);
});

test("truthyness of strings", function() {
    // strings can be empty
    var stringIsTruthy = "" ? true : false;

    expect( __ ).toEqual(stringIsTruthy);

    stringIsTruthy = "test string!" ? true : false;

    expect( __ ).toEqual(stringIsTruthy);
});

test("truthyness of null", function() {
    // null is a special value
    // It usually is used to indicate data is missing
    var value = null;
    var test = 0;

    if ( value ) {
        test = 1;
    }

    expect( __ ).toEqual(test);
});

test("truthyness of undefined", function() {
    // undefined is the 'default' value of variables, if you don't specify a value
    var unsetValue = undefined;
    var test = false;

    if ( unsetValue ) {
        test = true;
    }

    expect( __ ).toEqual(test);
});