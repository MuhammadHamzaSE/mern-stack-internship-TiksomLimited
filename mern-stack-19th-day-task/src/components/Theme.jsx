import { useState } from "react";

function Theme(){
    let [back,setBack]=useState(false);
    function backColor(){
        setBack(!back)
    }
    return(
            <div 
    style={{backgroundColor:back ? "black" :"white",
        color:back ? "white":"black",
        textAlign:"center",
        height:"100vh",
        padding:"20px"

    }}>
        <h1>{back ? "Black" :"White"}</h1>
        <button onClick={backColor}>{back?"White":"Black"}</button>
        
    </div>
    )

}
export default Theme
