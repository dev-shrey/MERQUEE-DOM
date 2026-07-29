/*
DOM (Document Object Model)

Browser converts HTML into a DOM Tree.
JavaScript interacts with the DOM, not directly with HTML.
document is the root object of the DOM.
*/

// Entire HTML document
console.log(document);

// Type of document
console.log(typeof document); // object

// Page title
console.log(document.title);

// Current URL
console.log(document.URL);

// <head> element
console.log(document.head);

// <body> element
console.log(document.body);

// Change page title
document.title = "Learning DOM";

// Background color
document.body.style.backgroundColor = "lightblue";

// Change body text color
document.body.style.color = "black";

console.log("DOM Loaded Successfully!");
