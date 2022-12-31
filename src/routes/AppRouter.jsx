import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GamePage from '../pages/GamePage'
import { LoginPage } from '../pages/LoginPage'


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={ <LoginPage/>}/>
        <Route path='/' element={ <GamePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
