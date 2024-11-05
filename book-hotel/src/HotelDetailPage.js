import React from 'react';
import TopBar from './TopBar';
import { useNavigate } from 'react-router-dom';
import './HotelDetailPage.css';
import { FaMapMarkerAlt, FaDollarSign, FaBed } from 'react-icons/fa';

const HotelDetailPage = () => {
  const navigate = useNavigate();

  const handleRoomSelection = () => {
    navigate('/booking');
  };

  return (
    <div>
      <TopBar /> {/* เพิ่ม TopBar */}
      <div className="hotel-detail-container">
        <div className="hotel-gallery">
          <img src="https://example.com/main-hotel-image.jpg" alt="Main Hotel" className="main-image" />
          <div className="thumbnail-gallery">
            <img src="https://example.com/thumb1.jpg" alt="Thumbnail 1" />
            <img src="https://example.com/thumb2.jpg" alt="Thumbnail 2" />
            <img src="https://example.com/thumb3.jpg" alt="Thumbnail 3" />
            <img src="https://example.com/thumb4.jpg" alt="Thumbnail 4" />
          </div>
        </div>

        <div className="hotel-details">
          <h2>โรงแรม ลิโวเทล เกษตรนวมินทร์ กรุงเทพ</h2>
          <p>ที่อยู่: 333 ซอยประเสริฐมนูกิจ 2, แขวงเสนานิคม, จตุจักร, กรุงเทพ, ไทย, 10900</p>
          
          <div className="rating-section">
            <p>คะแนนจากผู้เข้าพัก: 8.3 ดีเยี่ยม</p>
            <p>10,578 รีวิว</p>
            <div className="rating-bar">
              <div className="progress-bar">
                <span><FaMapMarkerAlt /> ทำเลที่ตั้ง 8.6</span>
                <div className="progress-fill" style={{ '--progress': '86%' }}></div>
              </div>
              <div className="progress-bar">
                <span><FaDollarSign /> คุ้มค่ากับเงินที่จ่าย 8.5</span>
                <div className="progress-fill" style={{ '--progress': '85%' }}></div>
              </div>
              <div className="progress-bar">
                <span><FaBed /> ความสะดวกสบายและคุณภาพ 8.4</span>
                <div className="progress-fill" style={{ '--progress': '84%' }}></div>
              </div>
            </div>
          </div>

          <h3>รายละเอียดเพิ่มเติม</h3>
          <p>
            โรงแรมแห่งนี้มีห้องพักที่ทันสมัย ออกแบบอย่างลงตัว พร้อมสิ่งอำนวยความสะดวกครบครัน
            เช่น ฟรี Wi-Fi, สระว่ายน้ำ, ศูนย์ออกกำลังกาย และร้านอาหาร
          </p>

          <button onClick={handleRoomSelection} className="select-room-button">เลือกห้องพัก</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;
