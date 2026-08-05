

function App() {
  const today=new Date()
  const name= "Hamza"
  const age=24
  const city="Lahore"
  const uni="University of Lahore"
  const degree="Software Engineering"
 return (
  <>
  <h1>My Information is given below :</h1>
  <p>My Name is {name}.I am {age} years old.I am from {city}.I have complete my {degree} degree from {uni} .</p>
  <p>Date : {today.toLocaleDateString()}</p>
  <p>Time : {today.toLocaleTimeString()}</p>
  </>
 )

}

export default App
