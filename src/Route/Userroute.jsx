import React from 'react'
import Loginpage from '../Pages/User/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Registrationpage from '../Pages/User/Registrationpage'
import Homepage from '../Pages/User/Homepage'
import Productlistpage from '../Pages/User/Productlistpage'
import Singleproductlistpage from '../Pages/User/Singleproductlistpage'
import Categorypage from '../Pages/User/Categorypage'
import Cartpage from '../Pages/User/Cartpage'
import Wishlist from '../Pages/User/Wishlistpage'
import Profilepage from '../Pages/User/Profilepage'
import Menscategorypage from '../Pages/User/Menscategorypage'
// import Categorycardspage from '../Pages/User/Categorycardspage'

function Userroute() {

  return (
    <div>
      <Routes>
        <Route path='/registration' element={<Registrationpage/>}/>
        <Route path='/Login'element={<Loginpage/>}/>
        <Route path='/*'element={<Homepage/>}/>
        <Route path='/Productlist'element={<Productlistpage/>}/>
        <Route path='/Singleproductlist'element={<Singleproductlistpage/>}/>
        <Route path='/category'element={<Categorypage/>}/>
        <Route path='/cart'element={<Cartpage/>}/>
        <Route path='/wishlist'element={<Wishlist/>}/>
        <Route path='/profile'element={<Profilepage/>}/>
        <Route path='/menscategory'element={<Menscategorypage/>}/>
   <Route path='/product/:productId' element={<Singleproductlistpage />} />
      
      </Routes>
    </div>
  )
}

export default Userroute
