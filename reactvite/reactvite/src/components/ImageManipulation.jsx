import React,{useState} from 'react'
import logo from "../assets/mydp.jpg"
function ImageManipulation() {
    const [logoHeight, setLogoHeight]=useState(200);
    const [logoWidth, setLogoWidth]=useState(200);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    const [myAngle,setmyAngle]=useState(0);
    function increaseHeight(){
        setLogoHeight(logoHeight+10);
    }

    function decreaseHeight(){
        setLogoHeight(logoHeight-10);
    }

    function increaseWidth(){
        setLogoWidth(logoWidth+10);
    }

    function decreaseWidth(){
        setLogoWidth(logoWidth+10);
    }

    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function rotateImage(){
        setmyAngle(myAngle+180);
    }
  return (
    <div><h2>ImageManipulation</h2>
        <div style={{height:'300px', width:'400px', border:'4px solid red', marginLeft:'50px',marginTop:'20px', backgroundColor:`rgb(${red},${green},${blue})`}}>
            <img src={logo} height={logoHeight} width={logoWidth} style={{transform: `rotate(${myAngle}deg)`}} />
        </div>
        <div>
            <button onClick={increaseHeight}>increaseHeight</button>
            <button onClick={decreaseHeight}>decreaseHeight</button>
            <button onClick={increaseWidth}>increaseWidth</button>
             <button onClick={decreaseWidth}>decreaseWidth</button>
            <button onClick={changeBGColor}>ChangeColor</button>
            <button onClick={rotateImage}>Rotate Image</button>
        </div>
        
    </div>
  )
}

export default ImageManipulation