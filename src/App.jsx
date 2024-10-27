import { useState } from 'react'
import './App.css'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Ajay Upadhyay</h1>
   <Project/>
   </>
  )
}

export default App
