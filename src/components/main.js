import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './signup'
import Contact from './contact'
import CarouselMain from './carouselMain'
import CreateResume from './createResume'
const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<CarouselMain/>}/>
        <Route path='/create-resume' element={<CreateResume/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Main
