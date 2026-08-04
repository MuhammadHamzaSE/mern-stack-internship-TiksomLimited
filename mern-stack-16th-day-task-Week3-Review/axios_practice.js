const axios=require("axios")
async function userData(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    return console.log(response.data)
}
userData()

module.exports={
    userData
}