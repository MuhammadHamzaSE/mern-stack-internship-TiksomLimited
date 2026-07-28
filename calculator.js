const ps=require("prompt-sync")
let prompt=ps();
let num1=prompt("Enter the first number :")
let num2=prompt("Enter the second number :")
let operator=prompt("Select the operator for further process +,-,/,* :")
 
function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b==0){
        console.log("Invalid Number")
    }
    else{
        return a/b;
    }
}

switch(operator){
    case '+':
        console.log(add(num1,num2));
        break;
    case '-':
        console.log(sub(num1,num2));
        break;
    case '*':
        console.log(mul(num1,num2));
        break;
    case '/':
        console.log(div(num1,num2))
        break;
    default :
    console.log("Invalid Number ")
}