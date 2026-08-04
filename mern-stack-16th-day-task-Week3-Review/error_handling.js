const axios=require("axios")
async function data(){
    try{
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    return console.log(response.data)
    }catch(error){
        console.log("Invalid API :",error)
    }
}
data()

module.exports={
    data
}