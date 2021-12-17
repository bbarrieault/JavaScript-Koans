module("About Arrays (topics/12_about_arrays.js)");

test("arrays: lists of values", () => {
    // Arrays are a comma-separated list of values and/or variables
    const myArray = [1, 1, 2, 3, 5];

    // Arrays know their own length!
    expect(myArray.length).toEqual(__);
});

test("Accessing values by index", () => {
    const favoriteThings = ["brown paper packages", 42, function () {
        return "vacations"
    }];

    // You can use [square braces] to retrieve items from an array by index.
    // Remember, indices start at 0!
    expect(favoriteThings[0]).toEqual(__);
    expect(__).toEqual(42);

    // you can even have functions in arrays
    const thirdFavorite = favoriteThings[2];
    expect(__).toEqual("vacations")
});

test("Array methods: find()", () => {
    const array = [1,7,3,4,5,8];
    const testIfEven = function( n ) {
        return n % 2 === 0;
    }

    // find() is a useful array method that takes a function as input. It returns the first value in the array
    //   which makes the input function return "true" (or a truthy value)
    const firstEvenNumber = array.find( testIfEven );

    expect(firstEvenNumber).toEqual( __ );

    // this is essentially the same as testIfEven, but written in shorthand
    const testIfOdd = n => n % 2 ;

    expect(array.find(testIfOdd)).toEqual( __ );

});

test("Array methods: filter()", function() {
    const array = [1,7,3,4,5,8];
    const testIfEven = function( n ) {
        return n % 2 === 0;
    }

    // filter() is an array method that takes a function as input. It returns a new array containing ALL
    //   values in the original array which makes the input function return "true" (or a truthy value)
    const evenNumbers = array.filter( testIfEven );

    expect(evenNumbers.length).toEqual( __ );
    expect(evenNumbers[1]).toEqual( __ );

    // shorthand notation example
    const result = array.filter(n => n % 2);

    expect(result[2]).toEqual( __ );
});

test("Array methods: forEach()", () => {
    const array = [1, 2, 3, 4, 5];
    let sum = 0;

    // forEach() is a method available on every array, similar to a for loop.
    // It runs the function it is given against each item in the array.
    // When a function is used as input, it can be placed directly into a function call, without even
    //   giving the function a name!
    array.forEach(
            function( n ) {
                sum += n;
            }
        );

    expect(__).toEqual( sum )
});

test("Array methods: map()", () => {
    const array = [1, 2, 3, 4, 5];

    // map() runs the given function against each element, just like forEach()
    // It also returns a new array with each of the values from the first array updated by the input function
    const result = array.map( (n) => n * 2 );

    expect( __ ).toEqual( 10 )
});

test("Chaining array methods", () => {
    // Arrays are often used to store objects
    const products = [
        { name: 'net', price: 60 },
        { name: 'bomb', price: 100 },
        { name: 'bottle', price: 50 },
        { name: 'life-up heart', price: 1000 }
    ];

    // Since most array methods return a new array, you can chain array methods together.
    // Each array method uses the previous method's result as its array to act on
    const sale = products
        .filter( product => product.price < 100 )
        .map( product => product.name );

    expect( sale[0] ).toEqual( __ );
});

test("Writing array methods: using what you learned", () => {
    // Your goal is to find the name of the furthest location using array methods
    const locations = [
        { name: "Mall", distance: 3 },
        { name: "Park", distance: 5 },
        { name: "Airport", distance: 10 },
        { name: "Store", distance: 1.5 },
    ];

    // This variable will hold the longest distance you've found thus far, for later use
    const longestDistance = 0;

    // This is the method that will be run against all of the locations in the 'locations' array
    const updateLongestDistance = function (distance_to_check) {

        // how can you tell if you need to update the longest distance?
        if ( distance_to_check > __ ) {

            // what do you do when you find a new longest distance?
            __;
        }
    }

    // start by checking the distance of all of the array elements
    // which array method runs your function on all of the elements?
    locations.__( updateLongestDistance );

    expect(longestDistance).toEqual(10);

    // Now that you have the longest distance, let's find the name of the location!

    // How can we tell if we are looking at the right location, whose distance we previously found?
    const checkLocationDistance = (location) => location.distance === __ ;

    // What array method is used to get a single value that passes the check you wrote?
    const furthestLocation = locations.__(checkLocationDistance);

    // how do you get the name of the location, now that you have it?
    const locationName = furthestLocation.__;

    expect(locationName).toEqual("Airport");
});
