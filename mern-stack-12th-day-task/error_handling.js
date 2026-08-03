function employee(){
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            resolve({
                name : "ali",
                dep : "hr"
            })
            reject("error")
        }, 2000)
    })
}
employee().then((data) => {
    console.log("Succesfully get data: ")
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
 
async function fetchUser(){
    try {
        const result = await employee()
        console.log("success: ")
        console.log(result)
       
    } catch (error) {
        console.log(error)
       
    }
}
fetchUser()