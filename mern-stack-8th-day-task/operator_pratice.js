//+++++++++++++++++++++Arithmatic Operator+++++++++++++++++++

const ps=require("prompt-sync")
let prompt=ps()
 let num1=prompt("Enter the first Number: ")
 let num2=prompt("Enter the second Number: ")
 let operator=prompt("Select the opertaor +,-,/,*,^ : ")

 switch (operator) {
    case "+":
        console.log(`The sum of ${num1} and ${num2} is: ${(num1)+(num2)}`);
        break;
    case "-":
        console.log(`The difference of ${num1} and ${num2} is: ${(num1)-(num2)}`);
        break;
    case "*":
        console.log(`The product of ${num1} and ${num2} is: ${(num1)*(num2)}`);
        break;
    case "/":
        console.log(`The quotient of ${num1} and ${num2} is: ${(num1)/(num2)}`);
        break;
    case "^":
        console.log(`The result of ${num1} raised to the power of ${num2} is: ${num1**num2}`);
        break;
    default:
        console.log("Invalid operator. Please select a valid operator.");
}

// +++++++++++++++++++ Comparison Operator ++++++++++++++++++++

console.log("Enter two numbers to check  wether they are equal or not")
let number1=prompt("Enter the First Number : ")
let number2=prompt("Enter the second Number :")

if(number1===number2){
    console.log("Both numbers are equlal and have same data types")
}
else if(number1==number2){
    console.log("Both numbers are equal not have same data types")
}
else if(number1>number2){
    console.log("Number 1 is greater than number 2")
}
else if(number1>number2){
    console.log("Number 1 is greater than Number 2")
}
else if(number1!==number2){
    console.log("Both numbers are not equal and have different datatypes")
}
else if(number1!=number2){
    console.log("Both numbers are not equal")
}

//+++++++++++++++++++++++Logical Operator +++++++++++++++++++++++++++

let userName=true
let userPssword=true
if(userName && userPssword){
    console.log("Logged In Successfully")
}
else{
    console.log("Try Again")
}


let loggedInFromEmail=true
let loggedInFromNumber=true
if(loggedInFromEmail || loggedInFromNumber){
    console.log("Successfully Logged In");
}
else{
    console.log("Try again")
}


let loggedInFromFacebook=false
if(!loggedInFromFacebook){
    console.log("Not Logged In")
}
else{
    console.log("Successfully Logged in ")
}


//++++++++++++++++++++++Ternary operator++++++++++++++++

let age=20

age>18 ? (console.log("You are applicable for apply for CNIC")) : (console.log("Your are not applicable"))


//++++++++++++++++++++++++Nullish Operator+++++++++++++++

let name="Hamza";
let age;

console.log(name ?? "Unknown")
console.log(age ?? 24)


//+++++++++++++++++++++++Optional Chainning+++++++++++++++

const user=[
    {name:"Hamza",age:24},
    {name:"Aryan", age:23},
    {name:"Ali",age:21}
]
console.log(user[3]?.name )