//import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/session/Register'

/**
 * 3 RUTAS
 * 1 RUTA PARA EL HOME
 * LOGIN, REGISTRO
 */

export default function Rutas() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/registrar' element={<Register/>}/>
      </Routes>
      

      </BrowserRouter>
    </>
  )
}
