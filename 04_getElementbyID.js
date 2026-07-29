/*
getElementById()

Selects an element using its id.
Returns a single element.
If the id doesn't exist, it returns null.
*/

// Select element by id
const heading = document.getElementById("heading");

console.log(heading);

// Access properties
console.log(heading.id);
console.log(heading.className);
console.log(heading.tagName);

// Change text
heading.textContent = "Learning DOM";

// Change style
heading.style.color = "red";
heading.style.backgroundColor = "yellow";

// Select another element
const btn = document.getElementById("btn");

console.log(btn);

// Change button text
btn.textContent = "Clicked";

// Add styles
btn.style.padding = "10px";
btn.style.backgroundColor = "black";
btn.style.color = "white";

// Element that doesn't exist
const box = document.getElementById("box");

console.log(box); // null

/*
Only one element should have a particular id.

Even if multiple elements have the same id,
getElementById() returns only the first matching element.
*/
