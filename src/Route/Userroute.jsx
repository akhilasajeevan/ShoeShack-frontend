import React from 'react'
import Loginpage from '../Pages/User/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Registrationpage from '../Pages/User/Registrationpage'
import Homepage from '../Pages/User/Homepage'
import Productlistpage from '../Pages/User/Productlistpage'
import Singleproductlistpage from '../Pages/User/Singleproductlistpage'
import Categorypage from '../Pages/User/Categorypage'

function Userroute() {
  return (
    <div>
      <Routes>
        <Route path='/registration' element={<Registrationpage/>}/>
        <Route path='/Login'element={<Loginpage/>}/>
        <Route path='/Home'element={<Homepage/>}/>
        <Route path='/Productlist'element={<Productlistpage/>}/>
        <Route path='/Singleproductlist'element={<Singleproductlistpage/>}/>
        <Route path='/category'element={<Categorypage/>}/>
      </Routes>
    </div>
  )
}

export default Userroute
