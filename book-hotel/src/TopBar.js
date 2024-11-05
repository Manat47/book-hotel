// TopBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/'); // นำทางไปยังหน้าหลัก
  };

  return (
    <div className="top-bar" onClick={goToMain}>
      <h1>Book a hotel</h1>
    </div>
  );
};

export default TopBar;
