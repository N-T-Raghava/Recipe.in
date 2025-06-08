import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ Setshowlogin }) => {

  const [Menu, setmenu] = useState("Home")

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className='logo' />
      <ul className='nav-menu'>
        <Link to='/' onClick={() => setmenu("Home")} className={Menu == "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setmenu("Menu")} className={Menu == "Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setmenu("Mobile-app")} className={Menu == "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setmenu("Contact-us")} className={Menu == "Contact-us" ? "active" : ""}>Contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => Setshowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
