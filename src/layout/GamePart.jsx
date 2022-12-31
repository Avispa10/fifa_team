import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import React , { useState } from 'react'
import { Campo } from '../components/Campo'
import { Plantilla } from '../components/Plantilla'
import { playersData } from '../data/playersData'
import './GamePart.css'

export const GamePart = () => {

  const [state, setState] = useState(playersData);
  return (
    
       <div className='gamepart' >
        <Campo />
        <Plantilla />
       </div>  
    
    
  )
}
