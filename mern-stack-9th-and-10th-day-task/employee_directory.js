const employee=[
    {
        name:"Hamza",
        department:"Software Engineering",
        age:24,
        sallary:50000
    },
    {
        name:"Asad",
        department:"Software Engineering",
        age:24,
        sallary:35000
    },
    {
        name:"Usman",
        department:"Software Quality Assurance",
        age:24,
        sallary:40000
    },
    {
        name:"Ali",
        department:"Bussiness develpopment",
        age:24,
        sallary:20000
    }    
]
 const searchByName=employee.find((nam)=> nam.name == "Hamza")
 console.log(`Employee Name is ${searchByName.name}`)

 const searchByDepartment=employee.filter((emp)=>emp.department==="Software Engineering")
 console.log(searchByDepartment)

 const averagesallery=employee.reduce((acc,currval)=>{
    return acc+currval.sallary
 },0)

 const avg=averagesallery/employee.length;
 console.log(avg)

 const updatedEmployeeDetail=[...employee, city="Lahore",Average=avg]
 console.log(updatedEmployeeDetail)