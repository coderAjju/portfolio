import { useState } from 'react'
import './App.css'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Project/>
   </div>
   </>
  )
}

export default App
