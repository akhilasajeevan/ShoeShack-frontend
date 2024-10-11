import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Pages/Admin/Loginpage'
import UserList from '../Components/Admin/Login/Userlist/Userlist'
import Userlistpage from '../Pages/Admin/Userlistpage'
import Productaddpage from '../Pages/Admin/Productaddpage'
import Productlistpage from '../Pages/Admin/Productlistpage'
import Editproductpage from '../Pages/Admin/Editproductpage'
import Categorypage from '../Pages/Admin/Categorypage'
function Adminroute() {
  return (
    <div>
        <Routes>
            <Route path='login'element={<Loginpage/>}/>
            <Route path='Userlist'element={<Userlistpage/>}/>
            <Route path='addproduct'element={<Productaddpage/>}/>
            <Route path='productlist'element={<Productlistpage/>}/>
            <Route path='Editproduct'element={<Editproductpage/>}/>
            <Route path='category'element={<Categorypage/>}/>
        </Routes>
     
    </div>
  )
}

export default Adminroute
