
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="logo">SHOESHACK</div>
      <nav>
        <ul>
          <li><button><Link to="/Home">Home</Link></button></li>
          <li><button><Link to="/shop">Shop</Link></button></li>
          <li><button><Link to="/cart">Cart</Link></button></li>
        </ul>
      </nav>
      <div className="user-actions">
      <button style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', borderRadius: '4px' }}> <Link to="/login">Login</Link></button>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', borderRadius: '4px' }}> <Link to="/Registration">Sign Up</Link></button>
    
      </div>
      
    </header>
  );
}

export default Header;
