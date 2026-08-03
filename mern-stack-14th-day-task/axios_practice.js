const axios=require("axios")
async function getUser(){
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("Response Status :",response.status)
        console.log("Data :",response.data)
    }
    catch(error){
        console.log("Invalid Api :",error.response.status)
    } 
}
getUser()