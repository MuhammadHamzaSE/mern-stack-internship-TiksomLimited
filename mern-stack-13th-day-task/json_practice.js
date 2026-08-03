async function getUser(){
    try{
        const response= await fetch ("https://dummyjson.com/products")
        if(!response.ok){
            console.log("Something Went wrong")
            return 
        }
        const data =await response.json()
        console.log(data)
    }
    catch(error) {
        console.log("Network Error",error.message)
    }
}
getUser()