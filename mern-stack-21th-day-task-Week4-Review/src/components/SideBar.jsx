import React from 'react'

const SideBar = ({ noOfStudents , selectedDept, setSelectedDept }) => {
  return (
    <div className='SideBar' style={{ background: '#f0f0f0', padding: '15px', width: '220px' }}>
      <h2>DashBorad</h2>
      <h4>Total Students: {noOfStudents}</h4>

      <hr style={{ margin: '15px 0' }} />
      <label htmlFor="dept-select"><b>Filter Department:</b></label>
      <select 
        id="dept-select"
        value={selectedDept} 
        onChange={(e) => setSelectedDept(e.target.value)}
        style={{ width: '100%', padding: '8px', marginTop: '8px', cursor: 'pointer' }}
      >
        <option value="All">All Departments</option>
        <option value="Software Engineering">Software Engineering</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Information Technology">Information Technology</option>
      </select>
    </div>
  )
}

export default SideBar