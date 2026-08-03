async function getUser(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response){
            throw new Error("Invalid Api");
        }
        
        const users= await response.json()
        return users

    }
    catch(error){
        console.log(error.message)
    }
}

module.exports={
    getUser
}