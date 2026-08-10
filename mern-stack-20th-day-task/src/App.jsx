import { useState } from 'react'
import './App.css'
import Student from './components/Student'
import Employee from './components/Employee'
import Products from './components/Products'

function App() {
  return(
    <div>
      <Student/>
      <br />
      <br />
      <Employee/>
      <br />
      <br />
      <Products/>
    </div>
  )
}

export default App
