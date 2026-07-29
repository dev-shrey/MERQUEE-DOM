/*
textContent

Returns all the text inside an element.
It also includes hidden text.
*/

const box = document.getElementById("box");

console.log(box.textContent);

/*
Change text using textContent
*/

box.textContent = "Learning JavaScript DOM";

/*
innerText

Returns only the visible text.
Hidden text is ignored.
*/

console.log(box.innerText);

/*
Change text using innerText
*/

box.innerText = "Hello Students";

/*
innerHTML

Returns the HTML inside an element.

It can also add HTML tags.
*/

const container = document.getElementById("container");

console.log(container.innerHTML);

/*
Replace HTML
*/

container.innerHTML = "<h2>Welcome</h2>";

/*
Add new HTML
*/

container.innerHTML += "<p>This paragraph is added using innerHTML.</p>";

/*
Difference between textContent and innerHTML
*/

container.textContent = "<h1>Hello</h1>";
// Displays: <h1>Hello</h1>

container.innerHTML = "<h1>Hello</h1>";
// Displays: Hello as a heading

/*
Read values
*/

console.log(container.textContent);
console.log(container.innerText);
console.log(container.innerHTML);

/*
Summary

textContent -> Gets/Sets plain text

innerText -> Gets/Sets visible text

innerHTML -> Gets/Sets HTML
*/
