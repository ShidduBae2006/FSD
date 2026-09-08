import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import mydp from './assets/mydp.jpg'
import idcard from './idcard.jsx'

function App() {
  

  return (
    <div style={{border:'2px solid black',backgroundColor:'yellow',height:'500px',width:'500px',margin:'auto',textAlign:'center'}}>          
    <h2>ABES ENGINEERING COLLEGE GHAZIABAD</h2>
    <img src={mydp} alt="myImage" style={{height:'100px',width:'100px'}}/>
    <h3>Roll No.: 2400320101066</h3>
    <h3>Name: Shraddha Shandilya</h3>
    <h3>Branch: Computer Science and Engineering</h3>
    <h3>Section: 24</h3>
    <h3>Skills: JavaScript, React, Node.js</h3>
    <idcard/>
    </div>
  )
}
export default App
