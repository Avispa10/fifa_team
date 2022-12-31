import React from 'react'
import { NavBar } from '../components/NavBar'
import { GamePart } from './GamePart'

export const GameLayout = () => {
  return (
    <>
    <NavBar></NavBar>
    <GamePart/>
    </>
  )
}
