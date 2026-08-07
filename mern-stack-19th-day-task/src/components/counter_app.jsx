import { useState } from "react"

function Counter(){
      let [counter,setCounter]=useState(0)
    const addCount=()=>{
        setCounter(counter+1)
    }
    const removeCount=()=>{
        setCounter(counter-1)
    }
    const resetCount=()=>{
        setCounter(0)
    }
    return(
    <div>
    <p>Counter Value : {counter}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={removeCount}>Sub</button>
    <button onClick={resetCount}>Reset</button>
    </div>
    )
    
}
export default Counter