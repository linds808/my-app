import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search-alt-2-svgrepo-com.svg';
import dashboardIcon from '../assets/home-icon-silhouette-svgrepo-com.svg';
import ratingsIcon from '../assets/rating-rate-svgrepo-com.svg';
import awarenessIcon from '../assets/bullhorn-svgrepo-com (2).svg';
import foodSeekerIcon from '../assets/people-svgrepo-com (2).svg';
import foodEstablishmentIcon from '../assets/store-home-svgrepo-com (2).svg';
import analyticsIcon from '../assets/analytics-svgrepo-com.svg';
import logoutIcon from '../assets/logout-svgrepo-com.svg';
import { supabase } from '../Pages/admin'; // Ensure supabase is imported
import '../css/header.css';

const Header = ({ toggleMenu, menuRef, menuOpen, closeMenu, handleClickOutside, changeTab }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, handleClickOutside]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login'); // Redirect to the new login route
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
  

  return (
    <header>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="search-bar">
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="user-icon">admin</div>
      </div>
      <div ref={menuRef} className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              <img src={dashboardIcon} alt="Dashboard" className="menu-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/listfoodseekers" onClick={closeMenu}>
              <img src={foodSeekerIcon} alt="listfoodseekers" className="menu-icon" />
              Food Seekers
            </Link>
          </li>
          <li>
            <Link to="/listestablishment" onClick={closeMenu}>
              <img src={foodEstablishmentIcon} alt="Listestablishment" className="menu-icon" />
              Food Establishment
            </Link>
          </li>
          <li>
            <Link to="/List" onClick={closeMenu}>
              <img src={ratingsIcon} alt="List" className="menu-icon" />
              Rating And Reviews
            </Link>
          </li>
          <li onClick={() => changeTab('request')}>
            <img src={awarenessIcon} alt="Request" className="menu-icon" />
            Request
          </li>
          <li onClick={closeMenu}>
            <img src={analyticsIcon} alt="Analytics" className="menu-icon" />
            Analytics
          </li>
          <li onClick={() => { closeMenu(); handleLogout(); }}>
            <img src={logoutIcon} alt="Logout" className="menu-icon" />
            Logout
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
