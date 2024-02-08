
import React from "react";
import './../styles/App.css';
import {useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const handleCLick=()=>{
    setCount(count++)
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked {count} times</p>
    <button onClick={handleCLick}> click me</button>
    </div>
  )
}

export default App
