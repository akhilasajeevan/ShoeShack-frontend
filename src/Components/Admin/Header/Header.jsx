import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Header.css';

const Header = () => {
  return (
    <div className="admin-header">
      <div className="logo">
        <h2>Admin Panel</h2>
      </div>
      <div className="nav-links">
      <button><Link to="/admin/login" className="nav-link">Login</Link></button> 
      <button> <Link to="/admin/category" className="nav-link">Category</Link></button> 
      
     
    
      <button> <Link to="/admin/addproduct" className="nav-link">ProductAdd</Link></button> 
      {/* <button> <Link to="/adminproduct-availability" className="nav-link">Product Availability</Link></button>  */}
      <button> <Link to="/admin/productlist" className="nav-link">ProductList</Link></button> 
      {/* <button> <Link to="admin//update-product" className="nav-link">Update Product</Link></button>  */}
      <button> <Link to="/admin/userlist" className="nav-link">UserList</Link></button> 
      {/* <button> <Link to="/admin/userlist" className="nav-link">Block User</Link></button>  */}
      </div>
    </div>
  );
};

export default Header;
