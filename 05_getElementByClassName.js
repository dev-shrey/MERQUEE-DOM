/*
getElementsByClassName()

Selects all elements with the given class name.

Returns an HTMLCollection.

HTMLCollection is array-like but not an actual array.
*/

// Select all elements with class "card"
const cards = document.getElementsByClassName("card");

console.log(cards);

// Total elements
console.log(cards.length);

// Access individual elements
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);

// Change first card
cards[0].style.backgroundColor = "lightblue";

// Change second card
cards[1].style.color = "red";

// Change third card
cards[2].textContent = "JavaScript";

/*
Loop using for loop
*/

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}

/*
Change style of every card
*/

for (let i = 0; i < cards.length; i++) {
    cards[i].style.padding = "15px";
    cards[i].style.margin = "10px";
    cards[i].style.border = "2px solid black";
}

/*
HTMLCollection is live.

If a new element with the same class is added,
the collection updates automatically.
*/

// Create new element
const newCard = document.createElement("div");

newCard.className = "card";
newCard.textContent = "React";

// Add to page
document.body.append(newCard);

// Collection updates automatically
console.log(cards);
console.log(cards.length);
