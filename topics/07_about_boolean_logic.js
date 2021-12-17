module("About Boolean Logic (topics/07_about_boolean_logic.js)");

test("And operator &&", function () {
    const test1 = true;
    const test2 = "yup";
    let result = false;

    // the AND ' && ' operator evaluates to true only if the values on both sides are true (or truthy)
    if (test1 && test2) {
        result = true;
    }

    expect(__).toEqual(result)
});

test("Or operator ||", function () {
    const test1 = false;
    const test2 = "maybe";
    let result = false;

    // the OR ' || ' operator evaluates to true if at least one of the values on either side is true (or truthy)
    if (test1 || test2) {
        result = true;
    }

    expect(__).toEqual(result)
});

test("Or operator for default values", function () {
    // You can use the OR operator ' || ' to handle missing data
    // If the first value given to ' || ' is falsey, it skips over it and returns the second value
    let result = null || "a value";

    expect(__).toEqual(result);
});