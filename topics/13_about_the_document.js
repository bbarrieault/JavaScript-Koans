module("About The Document (topics/13_about_the_document.js)");

test("The document object: getElementById()", () => {

    // `document` is an object that is always available on every web page
    // It lets you interact with the underlying structure of the page (the HTML)

    // getElementById() lets you find part of the page by the "id" property
    // This statement will find one of the banners at the top of the page
    // Hint: The ID of the element we want to grab is "qunit-banner"
    const banner = document.getElementById( __ );

    // once you have a reference to an element, you can edit it in code
    // innerHTML is a property that allows you to see and edit an element's contents
    banner.innerHTML = "Even a perfect program still has bugs.";

    expect( document.getElementById("qunit-banner").innerHTML )
        .toEqual( __ );
});

test("The document object: querySelector", () => {

    // Right-click -> inspect on the banner from the previous test, the one near the top talking abut perfect programs.
    // It will open the "elements" tab, allowing you to see the structure of the page.
    // What are that element's class name(s)? Hint: It is an <h2 /> element
    const className = __;

    // querySelector() lets you find part of the page by other properties, usually the 'class' attribute
    // The period '.' in front of the query indicates you are looking for an element by class name.
    // google "css selector notation" if you ever need to write a query selector
    const banner = document.querySelector("." + className );

    // once you have a reference to an element, you can edit it in code
    // the 'style' attribute allows you to add visual style indicators (css styles)
    banner.style = "background-color:white";

    expect( document.getElementById("qunit-banner").style )
        .toEqual( __ );
});