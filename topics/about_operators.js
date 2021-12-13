
module("About Operators (topics/about_operators.js)");

test("Assignment and Addition: What is the value of result?", function() {
  // variables, such as `result`, remember values for use later
  var result;

  // single equals ' = ' is the assign operator.
  // it stores a value in a variable
  result = 1;
  result = result + 1;
  result = result + 2;
  result = result + 3;

  expect( __ ).toEqual(result);
});

test("Assignment addition shorthand", function() {
  // variables only "live" inside of the { curly braces } where they are defined with 'var'
  // Each "var result" on this page is a brand new variable
  var result = 0;

  // `result += 1;` is a shortcut for `result = result + 1;`
  result += 1;
  result += 2;
  result += 3;

  expect( __ ).toEqual(result);
});

test("Subtraction assignment shorthand", function() {
  var result;
  result = 5;
  result = result - 1;
  result -= 2;

  expect( __ ).toEqual(result);
});

test("other assignment shorthands", function() {
  var result = 5;
  result -= 1
  result += 2
  result *= 3
  result /= 2

  expect( __ ).toEqual(result);
});

test("Modulo operator", function() {
  var result = 10;
  var x = 5;
  //the modulo operator returns the division remainder
  result = result % x;

  expect( __ ).toEqual(result);
});

test("Writing variable assignments", function() {
  var someValue = 10;

  // write an assignment&update statement by filling in the blanks below to make the expect() pass
  __ += __;

  expect(someValue).toEqual(25);
});
