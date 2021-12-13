module("About Control Structures (topics/about_control_structures.js)");

test("if statements: what is the value of the variable?", function() {
	var isPositive = false;

	// 'if' statements only execute the code inside the { curly braces } when
	// the condition inside its ( parens ) is true
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
	// Parentheses can be used to specify order-of-operations
	fruit = ( true ? "apple" : "orange" );

	// What is the value of fruit?
	expect( __ ).toEqual(fruit);

	fruit = false ? "pear" : "grape";

	// What is the value of fruit now?
	expect( __ ).toEqual(fruit);

	// you can have any calculated condition as the first part of a ternary statement
	fruit = ( 1 === 2 ? "tomato" : "cucumber" );
	expect( __ ).toEqual(fruit);
});

test("switch", function() {
	var result = 0;
	var value = 2;

	//switch statements are the same as chaining lots of ` if {} else if {} else if {} ` together
	// The value inside the switch() parens is the condition to check
	// Each case statement starts with a value, and only executes if the condition equals that value
	switch (value) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}

	expect( __ ).toEqual(result);
});

test("writing if statements", function() {

	// Your assignment here is to make sure the number you get as input
	//    is always greater than zero.
	// If it is not, you need to update it to be greater than zero.
	// Otherwise, you can leave the number as-is.

	// This line of code gets a random number between -99 and 1, and assigns it to valueToCheck.
	// Don't worry about the Math library for now, this is just so the test does different things sometimes.
	const valueToCheck = Math.random() * 100 - 99;

	// Write an if statement here, using the notation from previous tests.
	// Update valueToCheck's assigned value, but only if needed
	__

	expect(valueToCheck > 0).toEqual(true);
});
