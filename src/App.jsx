import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../componentes/Home'
import { Contacs } from '../componentes/Contacs'
import { AboutUs } from '../componentes/AboutUs'
import { Services } from '../componentes/Services'
import {Products} from '../componentes/Products'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
     
        <Route path='/contacts' element={<Contacs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
}
