import { useState,useEffect } from "react"
const Title = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Count : ${count}`
    },[count])
  return (
    <div>
        <h1>Documetn Title </h1>
        <h4>Title :{count}</h4>
        <button onClick={((e)=>(setCount(count+1)))}>On Click</button>
    </div>
  )
}

export default Title
