import React from 'react'
import { useState } from 'react'

function MyState() {
    const[counter,setCounter]=useState(10);
    function Increment(){
        setCounter(counter+10)
    }
    function Decrement(){
        setCounter(counter-5)
    }
  return (
    <div><h2>Counter:{counter}</h2>
    <button onClick={Increment}>Increment Counter</button>
    <button onClick={Decrement}>Decrement Counter</button>
    </div>

  )
}

export default MyState