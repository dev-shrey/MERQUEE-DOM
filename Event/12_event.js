// What is an Event ??
// A event is any action that happens inside the browser

// The action performed:  Mouse, keyboard, clcik
// User
// Browser



// Flow of event
// User Action
// Event Occur
// JS execute


// Button Clicked !!

// Click event happens

// JS runs a function


// Event handler is a js fun that executes when event occur


// Ways to add event (3)
// 1. Inline Event
/* <button onclick="showMessage()" id-"btn"> Click Me !!</button>
  function showMessage(){
      alert("Hello")
    } */


// 2. Property Method:
const btn = document.querySelector("#btn")

// btn.onclick = function(){
//   alert("Hello")
// }

// btn.onclick=function(){

// }


// 3. addeventlistener()
btn.addEventListener("click", function(e){
  console.log(e.type) //click
  console.log(e.target) //html tag
  console.log(e.clientX) //100 (different)
  console.log(e.screenX)  //same number
  console.log(e.currentTarget)  //html tag
  console.log(e.timeStamp) //decimal numbers
})




btn.onclick = function(){
  console.log("1st call")
}

btn.onclick = function(){
  console.log("2nd call")
}



// MOUSE EVENTS:
// 1. Click   'click' 
// 2. double click   'dblclick'
// 3. mousemove
// 4. mouseenter
// 5. mouseleave
// 6. mouseover
// 7. mousedown
// 8. mouseup



// KEYBOARD EVENTS:
// keydown
// keyup


// btn.addEventListener('mousemove',function(){
      // console.log()
// })


document.addEventListener("keyup",function(e){
  console.log(e.key)
})

password.addEventListener("input",function(){
  const value = password.value
})
