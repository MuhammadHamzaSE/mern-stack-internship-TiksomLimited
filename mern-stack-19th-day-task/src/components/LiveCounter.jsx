import { useState } from "react";

function LiveCounter(){
    let[name,setName]=useState("")
const counter=(e)=>{
    setName(e.target.value)
}
return (
    <div>
    <input type="text" placeholder="Enter Your Name :" onChange={counter} />
    <br />
    <h3>Your Character Count is : {name.length}</h3>
    </div>

)
}
export default LiveCounter