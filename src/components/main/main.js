import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './signup'
import Contact from './contact'
import Carousel from './carousel'
const Main = () => {
  return (
    <div className='main'>
        <Routes>
            <Route path='/' element= {<Carousel/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Main