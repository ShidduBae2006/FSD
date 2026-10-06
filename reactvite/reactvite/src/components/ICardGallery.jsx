import React from 'react'
import ICard from '../ICard'
import mydp from '../assets/mydp.jpg'

function ICardGallery() {
    const student=[{
        college:"ABES",
        pic:mydp,
        name:"Shraddha",
        branch:"CSE"
    },
    {
        college:"ABES",
        pic:mydp,
        name:"Shraddha",
        branch:"CSE"
    }
      ]
           return (
    <div>
    {
        student.map((ele)=>(
            <ICard data={ele}/>
        ))
    }

    </div>
  )
}

export default ICardGallery
