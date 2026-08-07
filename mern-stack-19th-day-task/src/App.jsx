import { useState } from 'react'
import Counter from './components/counter_app'
import Password from './components/Password'
import Theme from './components/Theme'
import LiveCounter from './components/LiveCounter'

function App() {

  return (
    <div>
      <Counter/>
      <br></br>
      <br />
      <Password/>
      <br />
      <br />
      <LiveCounter/>
      <br />
      <br />
      <Theme/>
    </div>
  )
}

export default App
