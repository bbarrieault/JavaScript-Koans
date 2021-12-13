
module("About Boolean Logic (topics/about_boolean_logic.js)");

test("And operator &&", function() {
   var test1 = true;
   var test2 = "yup";
   var result = false;

   // the AND ' && ' operator evaluates to true only if the values on both sides are true (or truthy)
   if (test1 && test2) {
       result = true;
   }

   expect( __ ).toEqual(result)
});

test("Or operator ||", function() {
   var test1 = false;
   var test2 = "maybe";
   var result = false;

   // the OR ' || ' operator evaluates to true if at least one of the values on either side is true (or truthy)
   if (test1 || test2) {
       result = true;
   }

   expect( __ ).toEqual(result)
});

test("Or operator for default values", function() {
    // You can use the OR operator ' || ' to handle missing data
    // If the first value given to ' || ' is falsey, it skips over it and returns the second value
    var result = null || "a value";

    expect( __ ).toEqual(result);
});