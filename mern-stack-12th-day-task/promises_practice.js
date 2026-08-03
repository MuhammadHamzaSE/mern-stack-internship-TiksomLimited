function withdrawalmoney(amount,balance){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount<=balance){
                const remaining=balance-amount;
                resolve(`Transaction Successful Your Remainning balance is :${remaining}`)
            }
            else{
                reject("Invalid balance")
            }
        },2000)
    })
}
withdrawalmoney(1200,5690)
.then((message)=>console.log(message))
.catch((error)=>console.log(error))


// +++++++++++++++++++++++ User Information ++++++++++++++++++++++++

function userinfo(user){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if( user){
            resolve(`name : ${user.name} , age : ${user.age} , University :${user.uni}`)
                }
            else{
                reject(`Invalid Id`)
            }
        },1000)
    })

}
const userData={
    name:"Muhammad Hamza",
    age:24,
    uni:"University Of Lahore"
}

userinfo(userData)
.then((message)=>console.log(message))
.catch((error)=>console.log(error))