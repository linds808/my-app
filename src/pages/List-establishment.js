import React, { useState, useRef, useEffect } from 'react';
import FoodSeekers from './FoodSeekers';
import FoodEstablishments from './FoodEstablishments';
import RatingsAndReviews from './RatingsAndReviews';
import Header from '../layout/header';
import '../css/Dashboard.css';
import '../css/list.css';

const ListEstablishment = () => {
  const [activeTab, setActiveTab] = useState('foodEstablishments');
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

  const changeTab = (tab) => {
    setActiveTab(tab);
    closeMenu();
  };

  return (
    <div className="list-header">
      <Header 
        toggleMenu={toggleMenu} 
        menuRef={menuRef} 
        menuOpen={menuOpen} 
        closeMenu={closeMenu} 
        handleClickOutside={handleClickOutside} 
        changeTab={changeTab}
      />
      <div className="List-tabs">
        <button className={`List-tab ${activeTab === 'foodSeekers' ? 'active' : ''}`} onClick={() => setActiveTab('foodSeekers')}>Food Seekers</button>
        <button className={`List-tab ${activeTab === 'foodEstablishments' ? 'active' : ''}`} onClick={() => setActiveTab('foodEstablishments')}>Food Establishments</button>
        <button className={`List-tab ${activeTab === 'ratingsAndReviews' ? 'active' : ''}`} onClick={() => setActiveTab('ratingsAndReviews')}>Ratings and Reviews</button>
        <button className={`List-tab ${activeTab === 'request' ? 'active' : ''}`} onClick={() => setActiveTab('request')}>Request</button>
      </div>
      <div className="List-content">
        {activeTab === 'foodSeekers' && <FoodSeekers />}
        {activeTab === 'foodEstablishments' && <FoodEstablishments />}
        {activeTab === 'ratingsAndReviews' && <RatingsAndReviews />}
        {activeTab === 'request' && <div>Request Content</div>}
      </div>
    </div>
  );
};

export default ListEstablishment;
