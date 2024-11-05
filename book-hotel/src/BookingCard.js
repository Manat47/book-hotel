import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import './BookingCard.css';
import './App.css';

const BookingCard = ({ room, onBook }) => {
  const { image, type, benefits, guests, price, isAvailable, rating } = room;

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#FFD700" />); // ดาวเต็ม
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />); // ดาวครึ่ง
      } else {
        stars.push(<FaRegStar key={i} color="#ccc" />); // ดาวเปล่า
      }
    }
    return stars;
  };

  return (
    <div className="booking-card">
      <img src={image} alt="Room" className="room-image" />
      <div className="room-details">
        <h3>{type}</h3>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <p key={index} className="benefit-item">
              <span className="icon">✔️</span> {benefit}
            </p>
          ))}
        </div>
        <p className="icon">👥 {guests}</p>
        <p className="price">฿{price}</p>
        <div className="actions">
          <button 
            className={isAvailable ? "book-button" : "book-button disabled"} 
            onClick={() => isAvailable && onBook(type)}
            disabled={!isAvailable}
          >
            {isAvailable ? "จอง" : "เต็ม"}
          </button>
          <p className="rating">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
