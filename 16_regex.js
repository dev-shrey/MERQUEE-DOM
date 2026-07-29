// Regular expression (regex) is a pattern search, match or validate text

// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

let mail = /[^A]+@gmail\.com$/
// console.log(mail.test("abc@mail.com"))

// let email = abc@gamil.com

// if(email.includes('@') && email.includes(".") && email.includes("gmail"))

// const regex = /pattern// 

// 1. test() - checks whether a string matches the pattern
// const regex = /hello World/;
// console.log(regex.test("hello world 123 "));


//Symobol 1. (^)  -> starts with 
// const regex = /^A/
// console.log(regex.test('pple'))


// Symbol 2. ($) -> Ends with
// const regex = /t$/
// console.log(regex.test('javascript sakjdjkasht  kk'))

// Symbol 2. (.) -> Anyone character

// const regex = /a..e/

// console.log(regex.test("abbe"))


// const regex = /Shreyansh$/
// console.log(regex.test("Shreyansh"))


// Character Class 

// const regex = /^[A-Za-z]$/

const variable = /[^A]/
// console.log(variable.test("Abc"))
// console.log(regex.test(""))

// console.log(/[0-9]/.test("qwertyuip1"))


console.log("A")
setTimeout(()=>{
  console.log("B")
},1000)
console.log("C")
