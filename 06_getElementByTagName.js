/*
getElementsByTagName()

Selects all elements with the given tag name.

Returns an HTMLCollection.
*/

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// Total paragraphs
console.log(paragraphs.length);

// Access individual elements
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);

// Change text color of first paragraph
paragraphs[0].style.color = "red";

// Change background color of second paragraph
paragraphs[1].style.backgroundColor = "yellow";

// Change text of third paragraph
paragraphs[2].textContent = "This text was changed using JavaScript.";

/*
Loop through all paragraphs
*/

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

/*
Apply same style to every paragraph
*/

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.padding = "10px";
    paragraphs[i].style.border = "1px solid black";
}

/*
Select all buttons
*/

const buttons = document.getElementsByTagName("button");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "black";
    buttons[i].style.color = "white";
}
