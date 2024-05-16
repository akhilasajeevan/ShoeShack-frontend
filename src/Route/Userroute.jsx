import React from 'react'
import Loginpage from '../Pages/User/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/User/Homepage'

function Userroute() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/home'element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default Userroute
