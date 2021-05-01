import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit=(e)=>{
    e.preventDeafult()
    console.log("hello")
  }
  
  return (
  <> 

  <section className="container">
 <h3>color Generator</h3>
 
 <form onSubmit={handleSubmit}>

 <input type="text" value={color} onchange={(e)=>{
   setColor(e.target.value)
 }}
 placeHolder="#f3333"
 />

 <button className="btn" type= "submit" >submit</button>
 </form>

  </section>
    <section className="colors">
  </section>

  </> 
  )
}

export default App
