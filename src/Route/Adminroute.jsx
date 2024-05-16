import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Pages/Admin/Loginpage'

function Adminroute() {
  return (
    <div>
        <Routes>
            <Route path='/login'element={<Loginpage/>}/>

        </Routes>
     
    </div>
  )
}

export default Adminroute
