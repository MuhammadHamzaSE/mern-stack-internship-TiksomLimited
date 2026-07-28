const arr1=[
    {
        name:"Hamza",
        marks:[12,13,15],
        Department:"Software Engineering",
        Fees:14000
    },
    {
        name:"Asad",
        marks:[15,15,15],
        Department:"Software Engineering",
        Fees:15000   
    },
    {
        name:"Usman",
        marks:[16,18,15],
        Department:"Computer Science",
        Fees:18000
    },
    {
        name:"Ali",
        marks:[10,11,15],
        Department:"Law Department ",
        Fees:19000
    }
]

const arr2=arr1.filter((num)=>(num.Department==="Software Engineering"))
console.log(arr2)

const arr3=arr1.map((num2)=>(num2.Fees+1000))
// console.log(arr3)

const arr4=arr1.map((num3)=>{
    const arr5=num3.marks.reduce((acc,cur)=>acc+cur,0)
    return arr5
})
console.log(arr4)
