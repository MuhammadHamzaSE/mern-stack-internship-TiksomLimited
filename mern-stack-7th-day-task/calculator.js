const ps=require("prompt-sync")
const prompt= ps()

let num1=parseFloat(prompt("Enter The first number :"))
let num2=parseFloat(prompt("Enter The second number :"))
let operator=prompt("Enter The operator (+,-,*,/):")

switch(operator){
    case "+":
        console.log(`The sum of ${num1} and ${num2} is : ${num1+num2}`)
        break;
    case "-":
        console.log(`The difference of ${num1} and ${num2} is : ${num1-num2}`)
        break;
    case "*":
        console.log(`The product of ${num1} and ${num2} is : ${num1*num2}`)
        break;
    case "/":
        console.log(`The quotient of ${num1} and ${num2} is : ${num1/num2}`)
        break;
    default:
        console.log("Invalid operator")
}

// Another way to do this is using if else statements

// if(operator=="+"){
//     console.log(`The sum of ${num1} and ${num2} is : ${num1+num2}`)
// }
// else if(operator=="-"){
//     console.log(`The difference of ${num1} and ${num2} is : ${num1-num2}`)
// }
// else if(operator=="*"){
//     console.log(`The product of ${num1} and ${num2} is : ${num1*num2}`)
// }
// else if(operator=="/"){
//     console.log(`The quotient of ${num1} and ${num2} is : ${num1/num2}`)
// }
// else{
//     console.log("Invalid operator")
// }