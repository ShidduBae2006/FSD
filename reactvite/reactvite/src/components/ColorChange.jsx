import React from 'react'
import { useState } from 'react'
function ColorChange() {
    const[red,setRed]=useState(255);
        const[green,setGreen]=useState(255);
        const[blue,setBlue]=useState(255);
    function rgb(x,y,z){
        setRed(x);
        setGreen(y);
        setBlue(z);
    }
    function Red(){
        rgb(255,0,0)
    }
    function Green(){
        rgb(0,255,0)
    }
    function Blue(){
        rgb(0,0,255)
    }

   
   return (<div><div style={{border:'2px solid black',backgroundColor:`rgb(${red},${green},${blue})`,height:'500px',width:'500px',margin:'auto',textAlign:'center'}}>
        <h2>ColorMagic</h2>
    </div>
    <div><button onClick={Red}>Red</button>
    <button onClick={Green}>Green</button>
    <button onClick={Blue}>Blue</button></div></div>
    
  )
}

export default ColorChange