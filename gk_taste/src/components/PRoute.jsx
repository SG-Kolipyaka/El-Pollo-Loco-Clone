import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import OurFood from './Pages/OurFood'
import Login from './Login'
import Register from './Pages/Register'
import Admin from './Pages/Admin'
// import { about } from './Pages/about'
// import { Routes } from 'react-router-dom'

const PRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ourfood" element={<OurFood/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </div>
  )
}

export default PRoute