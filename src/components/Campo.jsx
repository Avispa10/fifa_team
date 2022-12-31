import React from 'react'
import  campodejuego from '../assets/campo_futbol.jpeg'

import './Campo.css'

export const Campo = ( props ) => {


  return (
    <div className='campo' >   
     <img src={campodejuego} alt="" />
    </div>
  )
}
