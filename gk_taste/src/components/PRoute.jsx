import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import OurFood from './Pages/OurFood'
// import { about } from './Pages/about'
// import { Routes } from 'react-router-dom'

const PRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ourfood" element={<OurFood/>}/>
        </Routes>
    </div>
  )
}

export default PRoute