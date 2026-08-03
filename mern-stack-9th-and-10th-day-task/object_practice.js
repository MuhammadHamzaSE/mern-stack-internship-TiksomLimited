const user={
    name:"Hamza",
    age:24,
    rollNo:123456,
    department:"BSSE",
    university:"University Of lahore"
}
// console.log(user)
// user.age=25
// console.log(user)
// delete user.rollNo
// console.log(user)
// user.rollNo=123456
// console.log(user["name"])
// console.log(user.university)

for (const key in user) {
     console.log(key)
     console.log(user[key])
}