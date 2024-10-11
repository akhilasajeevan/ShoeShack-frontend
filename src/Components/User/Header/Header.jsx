import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Header.css";

import {jwtDecode} from 'jwt-decode'

function Header() {
  // const userToken = localStorage.getItem('token')
  // console.log(userToken)
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
   
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
   
    const storedUsername = localStorage.getItem("username");
    if (token) {
      try {
        setUsername(storedUsername);
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        setisLoggedIn(true);
      } catch (error) {
        console.error("invalid token");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setisLoggedIn(false);
    setUsername("");
    navigate("/");
  };

  const handleProtectedNavigation = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/login");
    }
  };
  return (
    <header className="header">
      <div className="header__logo">SHOESHACK</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button className="header__nav-button">
              <i className="fas fa-home"></i>
              <Link to="/Home" className="header__nav-link">
                Home
              </Link>
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button">
              <i className="fas fa-shopping-cart"></i>
              <Link to="/cart" className="header__nav-link">
                Cart
              </Link>
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button">
              <i className="fas fa-th-large"></i>
              <Link to="/category" className="header__nav-link">
                Categories
              </Link>
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button">
              <i className="fas fa-store"></i>
              <Link to="/Wishlist" className="header__nav-link">
                Wishlist
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="header__user-actions">
          <button
            className="header__action-button login"
            onClick={handleLogout}
          >
            <Link to="/login" className="header__action-link">
              <i className="fas fa-sign-in-alt"></i> Logoff
            </Link>
          </button>
        </div>
      ) : (
        <div className="header__user-actions">
          <button className="header__action-button login">
            <Link to="/login" className="header__action-link">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          </button>
          <button className="header__action-button signup">
            <Link to="/Registration" className="header__action-link">
              <i className="fas fa-user-plus"></i> Sign Up
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;


