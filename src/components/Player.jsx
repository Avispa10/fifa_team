import { Draggable } from 'drag-react'
import React from 'react'
import './Player.css'



export const Player = ( props ) => {
  return (
    <Draggable>
      <span className='player'>
        <img src={props.imageUrl} alt="" />
    </span>
    </Draggable>
    
  )
}
