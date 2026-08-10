import React from 'react'
import { useState } from 'react'

const Employee = () => {
        const employees=[
        {id:1,name:"Ahmad",role:"Software Egineer",sallary:90000,active:true},
        {id:2,name:"Ali",role:"Civil Engineer",sallary:80000,active:true},
        {id:3,name:"Akbar",role:"Chemical Engineer",sallary:70000,active:false}
    ]
    let [searchTerm,setSearchTerm]=useState("")
        const filteredEmployees=employees.filter((employee)=>{
        return employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  return (
    <div>
    <div style={{textAlign:'center'}}>
        <p>----------------------------------------------------------------------------</p>
        <h2>Employee Dashboard</h2>
     <input type="text" placeholder='Search the employee name :' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <br />
        <br />
            {filteredEmployees.length>0 ?(
            filteredEmployees.map((employee)=>{
                return <li key={employee.id}>
                    ID: {employee.id} -
                    Name :{employee.name} - Salary :{employee.sallary} - Role :{employee.role}

                </li>
            })
        ):(
            <h3>No Student Found</h3>
        )}
</div>
      
    </div>
  )
}

export default Employee
