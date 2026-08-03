// +++++++++++++++++++++++ By Using Axios +++++++++++++++++++++
require("dotenv").config()
const axios=require("axios")

async function getUser(){
    const api=process.env.API_URL
    try{
        const response=await axios.get(`${api}/products`)
        console.log("Response Status :",response.status)
        console.log("Response Data :",response.data)
    }
    catch(error){
        console.log(error)
    }
}
getUser()

// +++++++++++++++++++++++++++ By Using Fetch ++++++++++++++++++++

// async function getUser2(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//         const data=await response.json()
//         console.log("Data Status :",data.status)
//         console.log("Data :",data)
//     }
//     catch (error){
//         console.log("Invalid API")
//     }
// }
// getUser2()
