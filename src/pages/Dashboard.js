import React, { useState, useRef } from 'react';
import Header from '../layout/header';
import '../css/Dashboard.css';
import backIcon from '../assets/right-arrow-svgrepo-com.svg';
import peopleIcon from '../assets/people-svgrepo-com.svg';
import storeIcon from '../assets/store-svgrepo-com.svg';
import bullhornIcon from '../assets/bullhorn-svgrepo-com.svg';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  return (
    <div className="Dashboard-Header">
      <Header 
        toggleMenu={toggleMenu} 
        menuRef={menuRef} 
        menuOpen={menuOpen} 
        closeMenu={closeMenu} 
        handleClickOutside={handleClickOutside} 
      />
      <div className={`content ${menuOpen ? 'menu-open' : ''}`}>
        <div className="dashboard-header">
          <h3 className="dashboard-title">Dashboard</h3>
          <div className="dashboard-content">
            <div className="card card-1">
              <div className="card-content">
                <h3>10<img src={peopleIcon} alt="People" className="icon" /></h3>
                <p>Food Seekers</p>
              </div>
              <button className="info-button">
                More Info <img src={backIcon} alt="Back" />
              </button>
            </div>

            <div className="card card-2">
              <div className="card-content">
                <h3>15<img src={storeIcon} alt="Store" className="icon" /></h3>
                <p>Food Establishments</p>
              </div>
              <button className="info-button info-button-2">
                More Info <img src={backIcon} alt="Back" />
              </button>
            </div>

            <div className="card card-3">
              <div className="card-content">
                <h3>10<img src={bullhornIcon} alt="Bullhorn" className="icon" /></h3>
                <p>Halal Awareness</p>
              </div>
              <button className="info-button info-button-3">
                More Info <img src={backIcon} alt="Back" />
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="Dashboard-ratings-reviews-container">
            <h4>Ratings and Reviews</h4>
            <div className="Dashboard-ratings-reviews-stars">
              <ul>
                <li>Patayang Palay & More - <span>★★★★☆</span></li>
                <li>Patayang Palay & More - <span>★★★☆☆</span></li>
                <li>Patayang Palay & More - <span>★★★★★</span></li>
              </ul>
            </div>
          </div>
          <div className="Dashboard-food-seekers-container">
            <h4>Food Seekers</h4>
            <div className="Dashboard-food-seekers">
              <ul>
                <li>Lulay Mae</li>
                <li>Miyuri Hatake</li>
                <li>Jensine Cruz</li>
                <li>Aswadah Angel</li>
              </ul>
            </div>
          </div>
          <div className="Dashboard-food-establishments-container">
            <h4>Food Establishments</h4>
            <div className="Dashboard-food-establishments">
              <ul>
                <li>Patayang Palay & More</li>
                <li>Cheswan Halal Palace Satake</li>
                <li>Sabra's Halal Food</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
