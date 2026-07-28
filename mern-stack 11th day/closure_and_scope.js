// ++++++++++++++++++++++++ Closure +++++++++++++++++

function outer() {
    let name = "Muhammad Hamza...";
    function inner() {
        console.log(name);
    }
    return inner; 
}

const greet = outer();
greet(); 

//  ++++++++++++++++ Global Scope ++++++++++++++++++

let name2="Muhammad Hamza";

function print(){
    console.log(name2)
}
print()

// +++++++++++++++++ Function Scope +++++++++++++++++++

function print2(){
    let name3="Muhammad Hamza"
    console.log(name3)
}
print2()
// console.log(name3) it will generate an error because this variable can not be acccessed out of function .


// ++++++++++++++++++ Block Scope ++++++++++++++++++++++

if(true){
    let name4="Muhammd Hamza";
    console.log(name4)
}
else{
    // console.log("Invalid")
}
// console.log(name4) it will generate an error because it can not be accessible out of scope.

// ++++++++++++++++++++ Lexical Scope +++++++++++++++++++++

function outer(){
    let outerName="Muhammad Hamza"
    function inner(){
        let innerName="Aryan Khan"
        // console.log(outerName)
    }
    inner();
}
outer()




