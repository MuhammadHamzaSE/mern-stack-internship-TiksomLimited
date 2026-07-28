//++++++++++++++++++++++++Function Declaration+++++++++++++

console.log(addTwo(5,5))
function addTwo(num1,num2){
    return num1+num2
}


//+++++++++++++++++++++++ Function Expressions++++++++++++++

const addOne=function (num){
    return num1 + 7
}
console.log(addOne(3))

//+++++++++++++++++++++++ Arrow Functions ++++++++++++++++++++

const nameOf=(name)=>{
    return (`Welcome ${name} to the Webiste`)
}
console.log(nameOf("Hamza"))

const nameOfOther=(name2)=>(`Welcome ${name2} to the Webiste`)

console.log(nameOfOther("Aryan"))

//++++++++++++++++++++Default Parameters+++++++++++++++++++++

function defaultParam(name3="Hamza"){
    console.log(`Welcome ${name3} To The Website`)
}
defaultParam("Aryan")
defaultParam()