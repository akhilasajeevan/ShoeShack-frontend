import React from 'react'
import Loginpage from '../Pages/User/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Registrationpage from '../Pages/User/Registrationpage'


function Userroute() {
  return (
    <div>
      <Routes>
        <Route path='/registration' element={<Registrationpage/>}/>
      </Routes>
    </div>
  )
}

export default Userroute
