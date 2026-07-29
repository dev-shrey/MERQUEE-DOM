// // submit 
// // event.preventDefault()
// const form = document.getElementById("form")
// form.addEventListener('submit',function(event){
//   event.preventDefault()
//   let name = document.getElementById("name").value

//   document.getElementById('output').innerText = "Welcome "+name
// })

// // input
// // const box = document.getElementById('box')
// // box.addEventListener('input',function(){
// //   // document.getElementById('res').innerText = box.value
// // })
// // H
// // He
// // Hel 
// // Hell 
// // Hello

// // Hello 

// // change

// // const box = document.getElementById('box')
// // box.addEventListener('change',function(){
// //   res.innerText = box.value
// // })

// // Hello

// // focus

// box.addEventListener('focus',function(){
//   box.style.background = "yellow"
// })


// // blur
// box.addEventListener('blur',function(){
//   box.style.background = "white"
// })


// // invalid 
// const username = document.getElementById('username')
// username.addEventListener('invalid',function(){
//   alert("Name Required")
// })

// // select
// const fullName = document.getElementById('fullname')

// fullName.addEventListener("select",function(){
//   alert("Text Selected")
// })


// What if form event ?

// examples -> ttyping.., value change, reset

// Event List
// submit - form submit 
// reset - form reset
// input - for everhy Character it will type or  (Live value)
// change -  final value 
// focus - when u click on input box
// blur - out of the input focus 
// invalid - validation failed
// select - text select 


// submit
// const form = document.getElementById('form')
// const output = document.getElementById('output')

// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   let name = document.getElementById("name").value
//   output.innerText = "Welcome "+ name
// })

// input
// const box =  document.getElementById('box')
// box.addEventListener('input',()=>{
//   document.getElementById("result").innerText = box.value
// })

// H 
// He 
// Hel 
// Hell 
// Hello
// Hell 
// Hel 
// He 
// H



// change
// const box =  document.getElementById('box')
// box.addEventListener('change',()=>{
//   document.getElementById("result").innerText = box.value
// })


// focus
// const box =  document.getElementById('box')
// box.addEventListener('focus',()=>{
//   box.style.background = "yellow"
// })


// blur
// const box =  document.getElementById('box')
// box.addEventListener('blur',()=>{
//   box.style.background = "black"
// })


// invalid 
// const name = document.getElementById('name')
// name.addEventListener('invalid',()=>{
// })

// select
// document.querySelector("input").addEventListener('select',()=>{
//   alert("Text selected")
// })


console.log("A")
setTimeout(()=>{
  console.log("B")
},2000)
console.log("C")

