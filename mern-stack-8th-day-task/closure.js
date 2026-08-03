//+++++++++++++++Closure++++++++++++++++++++

function outer(){
    let name="Hamza";
    function inner(){
        console.log(name)
    }
    return inner()
}

outer()