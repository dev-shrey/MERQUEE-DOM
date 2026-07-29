/*
style

The style property is used to add or change inline CSS using JavaScript.
*/

const box = document.getElementById("box");

/*
Read inline styles

Only inline styles can be read directly.
*/

console.log(box.style.color);
console.log(box.style.backgroundColor);

/*
Change styles
*/

box.style.color = "white";
box.style.backgroundColor = "royalblue";
box.style.padding = "20px";
box.style.fontSize = "24px";
box.style.borderRadius = "10px";

/*
Change multiple styles
*/

box.style.width = "250px";
box.style.height = "150px";
box.style.border = "3px solid black";
box.style.textAlign = "center";
box.style.lineHeight = "150px";

/*
Hide element
*/

box.style.display = "none";

/*
Show element again
*/

box.style.display = "block";

/*
Change visibility
*/

box.style.visibility = "hidden";

box.style.visibility = "visible";

/*
Change opacity
*/

box.style.opacity = "0.5";

box.style.opacity = "1";

/*
Cursor style
*/

box.style.cursor = "pointer";

/*
Background image
*/

box.style.backgroundImage = "linear-gradient(to right, blue, purple)";

/*
CSS property names

CSS               JavaScript

background-color  -> backgroundColor
font-size         -> fontSize
border-radius     -> borderRadius
text-align        -> textAlign
*/
