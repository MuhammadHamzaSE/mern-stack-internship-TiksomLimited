//+++++++++++++++++++ Global Scope+++++++++++++++++

let name="Hamza"
function one(){
    console.log(`Welcome ${name} To The website`)
}
one();

//+++++++++++++++++++ Block Scope +++++++++++++++++++

for(let i=1;i<=10;i++){
    console.log(i)
}

//++++++++++++++++++++ Function Scope+++++++++++++++++

function addTwo(num1,num2){
    let result=num1+num2
    console.log(result)
}
addTwo(5,5)

