// ++++++++++++++++++++++++ Display UserName and Email ++++++++++++++++
// async function getUser(){
//     const resonse=await fetch ("https://jsonplaceholder.typicode.com/users")
//     const data=await resonse.json()
//     data.forEach(item => {
//         console.log(`Name : ${item.name}`)
//         console.log(`email : ${item.email}`)
//     });
// }
// getUser()

// ++++++++++++++++++++++ Create A Post Request ++++++++++++++++++++

async function addUser(){
    const newUser={
        firstName:"Hamza",
        lastName :"Anwar",
        age:24
    }
        const reponse=await fetch("https://dummyjson.com/users/add",{
            method:"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        const data=await reponse.json()
        console.log(data) 
}
addUser()