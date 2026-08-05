const axios=require("axios")
const { data } = require("./error_handling")
async function userData(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    return console.log(response.data)
    const {data} = response 
    console.log(data)
}
userData()

module.exports={
    userData
}