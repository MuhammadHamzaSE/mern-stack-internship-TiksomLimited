const user=new Promise((resolve,reject)=>{
    const user=true
    if(user){
        resolve("User Is Verified")
    }
    else{
        reject("User Is Not Verified")
    }
})
user
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

module.exports={
    user
}