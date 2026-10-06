import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:'2px solid black',height:'250px',width:'200px'}}>
    <h2>College:{data.college}</h2>
    <div><img src={data.pic} height={200} width={200}/></div>
    <h2>Name:{data.name}</h2>
    <h2>Branch:{data.branch}</h2>
    

    </div>
  )
}

export default ICard