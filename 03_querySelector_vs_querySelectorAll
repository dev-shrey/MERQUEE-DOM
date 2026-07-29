/*
querySelector()

Returns the first matching element.
Returns null if no element is found.
*/

const heading = document.querySelector("h1");
console.log(heading);

const box = document.querySelector(".box");
console.log(box);

const logo = document.querySelector("#logo");
console.log(logo);

/*
querySelectorAll()

Returns all matching elements as a NodeList.
If no element is found, it returns an empty NodeList.
*/

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

const items = document.querySelectorAll(".item");
console.log(items);

/*
Accessing elements from NodeList
*/

console.log(items[0]);
console.log(items[1]);

/*
Loop through NodeList using for...of
*/

for (const item of items) {
    console.log(item);
}

/*
Loop through NodeList using forEach()
*/

items.forEach(function (item) {
    console.log(item.innerText);
});

/*
querySelector() returns a single element.
*/

const firstItem = document.querySelector(".item");
firstItem.style.color = "red";

/*
querySelectorAll() returns multiple elements.
*/

const allItems = document.querySelectorAll(".item");

allItems.forEach(function (item) {
    item.style.backgroundColor = "yellow";
});

/*
Summary

querySelector()      -> First matching element
querySelectorAll()   -> All matching elements (NodeList)
*/
