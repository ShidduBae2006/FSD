import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ImageManipulation from './components/ImageManipulation'
import './App.css'
//import ICard from './ICard'
//import ICardGallery from './components/ICardGallery'
//import MyState from './components/MyState'
import ColorChange from './components/ColorChange'

function App() {
  

  return (<div style={{textAlign:'center',justifyContent:'center',display:'flex',height:'600px',width:'800px',marginLeft:'50px',marginTop:'20px'}}>
    <ImageManipulation/>
  </div>
   
  )
}
export default App
