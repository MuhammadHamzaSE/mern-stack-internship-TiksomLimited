const ps =require("prompt-sync");
const prompt=ps();

let name=prompt("What is your name ?")
let age=prompt("Whats is your age ?")
let language=prompt("What is your favourite programing language ?")

console.log(`My name is ${name} .I am ${age} years old and my favourite language is ${language} .`)