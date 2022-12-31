import React from 'react'
import { playersData } from '../data/playersData';
import { Player } from './Player';

import './Plantilla.css'

export const Plantilla = () => {
    
  console.log(playersData);

  return (
    <div className="plantilla">
        <ul>
            { playersData.map( player => {
                return <Player key={player.id} {...player}/>
              })
            }
        </ul>
    </div>
        
    
  )
}
