import { useState } from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  const students = [
    { id: 1, name: "Hamza", department: "Software Engineering", roll_no: 123456, active: true },
    { id: 2, name: "Usman", department: "Computer Science", roll_no: 234567, active: true },
    { id: 3, name: "Asad", department: "Information Technology", roll_no: 345678, active: false },
    { id: 4, name: "Ali", department: "Software Engineering", roll_no: 456789, active: true },
    { id: 5, name: "Bilal", department: "Computer Science", roll_no: 567891, active: false }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filterStudents = students.filter((student) => {
    const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || student.department === selectedDept;

    return matchesName && matchesDept;
  });

  return (
    <div>
      <Header />
      
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
        
        
        <SideBar 
          noOfStudents={students.length} 
          selectedDept={selectedDept} 
          setSelectedDept={setSelectedDept} 
        />

        <div style={{ flex: "1", padding: "20px" }}>
          <StudentList 
            filterStudents={filterStudents} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
        </div>

      </div>
    </div>
  )
}

export default App