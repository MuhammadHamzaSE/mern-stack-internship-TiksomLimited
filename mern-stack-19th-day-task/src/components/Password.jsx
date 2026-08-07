import { useState } from "react";

function Password(){
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[age,setAge]=useState("")
    let[password,setPassword]=useState(false);

    const hidePassword=()=>{
        setPassword(!password)
    }
    return(
        <div>
        <input type="text" placeholder="Enter Your Name :" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="email" placeholder="Enter Your Email :" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="number" placeholder="Enter Your Age :" onChange={(e)=>{setAge(e.target.value)}}/>
        <input type={password ? "text ":"password"} placeholder="Enter Your Password :"/>
        <button onClick={hidePassword}>{password ? "Hide" : "Show" }</button>
    </div>
    )
}
export default Password