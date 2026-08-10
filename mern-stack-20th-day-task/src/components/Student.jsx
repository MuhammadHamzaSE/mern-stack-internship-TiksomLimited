import React, { useState } from 'react'
const Student = () => {
    const students=[
        {id:1,name:"Hamza",department:"Software Egineering",rollno:123456,active:true},
        {id:2,name:"Usman",department:"Software Egineering",rollno:123456,active:true},
        {id:3,name:"Asad",department:"Software Engineering",rollno:123456,active:false}
    ]
    let [searchTerm,setSearchTerm]=useState("")
    let [activeUser,setActiveUser]=useState([])
    const filteredStudents=students.filter((student)=>{
        return student.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    const checkActive=()=>{
        const active=students.filter((student)=>(student.active))
        setActiveUser(active)
    }
    const clearUser=()=>{
        setActiveUser([])
    }

  return (
    <div>
        <h2 style={{textAlign:'center'}}>Student DashBoard</h2>
        <div style={{textAlign:'center'}}>
     <input type="text" placeholder='Search the student name :' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <br />
        <br />
            {filteredStudents.length>0 ?(
            filteredStudents.map((student)=>{
                return <li key={student.id}>
                    ID: {student.id} -
                    Name :{student.name} - Roll No :{student.rollno} - Student Department :{student.department}

                </li>
            })
        ):(
            <h3>No Student Found</h3>
        )}

               <h3>Click the Button to check student active list</h3>
               <button onClick={checkActive}>Active User</button>
               <br />
               <br />
               {activeUser.map((student)=>{
                    return <li key={student.id}>
                    ID: {student.id} -
                    Name :{student.name} - Roll No :{student.rollno} - Student Department :{student.department}
                </li>
               })}
               <br />
               <button onClick={clearUser}> Clear</button>
    
        </div>

      
    </div>
  )
}

export default Student
