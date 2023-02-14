import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PhoneInput from './components/PhoneForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <PhoneInput></PhoneInput>
    </div>
  )
}

export default App
