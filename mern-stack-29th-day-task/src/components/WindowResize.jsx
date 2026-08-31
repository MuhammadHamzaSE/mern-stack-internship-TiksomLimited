import React from 'react'
import { useState,useEffect } from 'react'
const WindowResize = () => {
    const[windowWidth,setWindowWidth]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return(()=>{
        window.removeEventListener('resize',handleResize)
    })
    }
,[])
  return (
    <div>
        <h1>Window Size</h1>
        <h4>WIndow Size :{windowWidth} px</h4>
    </div>
  )
}

export default WindowResize
