
module("About Objects (topics/11_about_objects.js)");

test("Intro to objects", function() {
    // you can use curly braces like this to define a variable as an 'Object'
    // Objects are containers that can hold many values
    let object = {};
    object.ID = "test";
    object.favorite_color = "blue";

    expect( __ ).toEqual(object.ID);
    expect( __ ).toEqual(object.favorite_color);
});

test("Object literal notation", function() {
    // You can specify properties and values of an object using this notation
    // when you first declare it
    let person = {
        name: "Amory Blaine",
        favorite_color: __
    };

    person.age = 56;

    expect( __ ).toEqual(person.name);
    expect( __ ).toEqual(person.age);
    expect( "yellow" ).toEqual(person.favorite_color);
});

test("Dynamic object properties", function() {
    const year = 2012;
    const getCurrentSpeed = function() {
        return 55;
    }

    const car = {
        name: "Chevy Malibu",
        modelYear: year, // you can always use variables instead of literals in JavaScript
        speed: getCurrentSpeed // you can even add functions as properties of an object
    };

    expect( __ ).toEqual(car.name);
    expect( car.__ ).toEqual(2012);

    // Hint: use parentheses() after a function name to run its code in curly braces
    expect( car.__ ).toEqual(55);
});

test("Object scope and the 'this' keyword", function () {
    // In object methods, you can access the object's properties by using `this` as the object name
    const person = {
        name: 'bob',
        intro: function () {
            return "Hello, my name is " + this.__;
        }
    }
    expect( person.intro() ).toEqual("Hello, my name is bob")
});