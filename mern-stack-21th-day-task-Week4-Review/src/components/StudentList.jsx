import React from 'react'

const StudentList = ({ filterStudents = [], searchTerm, setSearchTerm }) => {
  return (
    <div>
      <br />
      <input 
        type="text" 
        placeholder='Enter The Student Name :' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{width:"180vh", height:"30px"}}
      />
      
      {filterStudents.length > 0 ? (
        filterStudents.map((student) => {
          return (
            <div key={student.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <p><b>Name:</b> {student.name}</p>
              <p><b>Department:</b> {student.department}</p>
              <p><b>Roll No:</b> {student.roll_no}</p>
              <p><b>Status:</b> {student.active ? "Active " : "Inactive "}</p>
            </div>
          )
        })
      ) : (
        <h3>No Students Found</h3>
      )}
    </div>
  )
}

export default StudentList