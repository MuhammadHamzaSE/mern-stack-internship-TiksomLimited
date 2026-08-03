const axios=require("axios")
const ps=require("prompt-sync");
const prompt=ps();
async function getUser(){
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        const userArr=[response.data]
        if(!response){
            // console.log("Invalid API :",response.status)
        }
        else{
        console.log(userArr)
        }
        console.log(userArr)
        console.log("If You Want To Search A User Bt its name :")
        const userName=prompt("Enter the name of user :")
        const newArr=userArr.map((num)=>{
        const specificUser=userArr.filter((num)=>(num.name===userName))
        console.log(specificUser.data)
        return newArr
        })
        console.log(newArr)


    }
    catch(error){
        // console.log("Something went wrong :", error.response.status)
    }
}
getUser();