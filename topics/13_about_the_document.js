module("About The Document (topics/13_about_the_document.js)");

test("The document object", () => {

    // `document` is an object that is always available on every web page
    // It lets you interact with the underlying structure of the page (the HTML)

    // getElementById() lets you find part of the page by the "id" property
    // this statement finds one of the banners at the top of the page
    const banner = document.getElementById("qunit-banner");

    // once you have a reference to part of the dom, you can edit it in code
    banner.innerHTML = "Even a perfect program still has bugs.";

    expect( document.getElementById("qunit-banner").innerHTML).toEqual( __ );
});