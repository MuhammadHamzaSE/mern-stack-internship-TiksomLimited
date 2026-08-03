// ++++++++++++++++++++++ Fetch User From JSON +++++++++++++++++++

async function getUser(){
    const response=await fetch ("https://dummyjson.com/products")
    const data =await response.json()
    console.log(data)
}
getUser()

// ++++++++++++++++++++ Fetch Post For A Slected User ++++++++++++++++++

async function getUserSpecific(ID){
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ID}`)
    const data=await response.json()
    console.log(data)
}
getUserSpecific(2)