async function getuser(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json()
    return console.log(data)
}
getuser()

module.exports={
    getuser
}