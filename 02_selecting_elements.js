/*
Selecting Elements

JavaScript uses the document object to select HTML elements.
*/

// Select by ID
const heading = document.getElementById("heading");
console.log(heading);

// Select first element using CSS selector
const para = document.querySelector("p");
console.log(para);

// Select all matching elements
const items = document.querySelectorAll(".item");
console.log(items);

// Select by class name
const cards = document.getElementsByClassName("card");
console.log(cards);

// Select by tag name
const buttons = document.getElementsByTagName("button");
console.log(buttons);
