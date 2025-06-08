import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext';

const Navbar = ({ Setshowlogin }) => {

  const [Menu, setmenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={() => setmenu("Home")} className={Menu == "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setmenu("Menu")} className={Menu == "Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setmenu("Mobile-app")} className={Menu == "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setmenu("Contact-us")} className={Menu == "Contact-us" ? "active" : ""}>Contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => Setshowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
