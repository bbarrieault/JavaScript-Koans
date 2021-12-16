module("About Loops (topics/09_about_loops.js)");

test("Time to do some loops!", function() {
    var count = 0;
    var output = "";  // strings can be empty sometimes

    // loops keep re-running code in the { curly braces } until their condition in ( parentheses ) is false
    while (count < 5 ) {
        output = output + "A";

        count += 1;
    }

    expect( __ ).toEqual(output);
});

test("More while loops", function() {
    var number = 64;
    var power = 0;

    // loops can have all sorts of different halting conditions
    while (number > 2) {

        number = number / 2;

        power ++;  // ' ++ ' is shorthand for ' += 1 '
    }

    expect( __ ).toEqual(power);
});

test("for loops", function() {
    var counter = 0;

    // for loops are the same as while loops, except they have their counter variable and halt condition all in one line
    // the syntax is ' for ( <counter variable> ; <halting condition> ; <incrementer> )
    // Almost all for loops go from 0 to a specified number, going up one at a time
    for (var i = 1; i <= 3; i++) {

        counter = counter + i;
    }

    expect( __ ).toEqual(counter);
});