module("About Control Structures (topics/about_control_structures.js)");

test("if statements: what is the value of the variable?", function() {
	var isPositive = false;

	// 'if' statements only execute the code inside the { curly braces } when the condition inside its ( parens ) is true
	// Otherwise it skips the whole block { }
	if (2 > 0) {
		isPositive = true;
	}

	expect( __ ).toEqual(isPositive);
});

test("if statements continued", function() {
	var test = 0;

	// 'else' statements are only run when the 'if' statement is false
	if( test > 10) {
		test = 5;
	} else {
		test = 2;
	}

	expect( __ ).toEqual(test);
});

test("ternary operator: inline ifs", function() {
	var fruit;
	// if-else statements can be written shorthand. the notation is <condition> ? <true fork> : <false/else fork>
	fruit = ( true ? "apple" : "orange" );

	// What is the value of fruit?
	expect( __ ).toEqual(fruit);

	fruit = false ? "pear" : "grape";

	// What is the value of fruit now?
	expect( __ ).toEqual(fruit);

	// you can have any calculated condition as the first part of a ternary statement
	fruit = 1 === 2 ? "tomato" : "cucumber";
	expect( __ ).toEqual(fruit);
});

test("switch", function() {
	var result = 0;

	//switch statements are the same as chaining lots of ` if {} else if {} else if {} ` together
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}

	expect( __ ).toEqual(result);
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
	expect( __ ).toEqual(result);
});
