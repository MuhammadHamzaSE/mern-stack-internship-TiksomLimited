import React from 'react'
import { useState,useEffect } from 'react'
const Timer = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        const number=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        return(()=>{
            clearInterval(number)
        })
    },[])
  return (
    <div>
        <h1>Timer Count</h1>
        <h4>Count : {count}</h4>
    </div>
  )
}

export default Timer
