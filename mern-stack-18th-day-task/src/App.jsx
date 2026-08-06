import StudentCard from "./components/StudentCard"
import UOL from "./assets/UOl.jpg"
import "./App.css"
import Header from "./components/Header"

function App() {
  return (
    <div className="header">
    <Header name ="Student Card Details "/>
    <div className="card">
    <StudentCard name="Hamza" roll_no={123456} department="Software Engineering" cgpa={2.99} img={UOL}/>
    <StudentCard name="Usman" roll_no={987654} department="Computer Science" cgpa={2.75} img={UOL}/>
    <StudentCard name="Asad" roll_no={985467} department="Information Technology" cgpa={3.01} img={UOL}/>
   </div>
    </div>

  )
}

export default App
