module("About Document Interaction (topics/14_about_document_interaction.js)");

let buttonHasBeenClicked = false;

test("Simple component test: button check", () => {
    const runTest = false; // change this to "true" when you get here

    runtest && addButtonSection();

    //todo: check button click handler
});

test("Writing component tests: input check", () => {
    const runTest = false; // change this to "true" when you get here

    runTest && addInputSection();

    // todo: check input value
});


const addButtonSection = () => {
    const wrapper = document.getElementById("component-test-1");
    const button = document.createElement("button");

    // todo

};

const addInputSection = () => {
    const wrapper = document.getElementById("component-test-2");

    // todo;
};
