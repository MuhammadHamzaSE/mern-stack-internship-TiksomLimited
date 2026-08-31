import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import WindowResize from './components/WindowResize'
import Timer from './components/Timer'
import Search from './components/Search'

function App() {

  return (
    <>
    <Title/>
    <WindowResize/>
    <Timer/>
    <Search/>
    </>
  )
}

export default App
