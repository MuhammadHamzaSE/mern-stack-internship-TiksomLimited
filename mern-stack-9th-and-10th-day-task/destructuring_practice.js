// ++++++++++++++++++ Object Destructuring ++++++++++++++++++

const obj={
    instructorName:"Hamza",
    course:"Node Js",
    coursePrice:"999"
}

const{instructorName:name}=obj
console.log(name)

// +++++++++++++++++++++++ Array Destructuring +++++++++++++++++++

const myarr=["Apple","Pineapple","Orange"]
const[item1,item2,item3]=myarr
console.log(item2)