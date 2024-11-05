import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelDetailPage from './HotelDetailPage';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* แสดงหน้า HotelDetailPage เป็นหน้าแรก */}
          <Route path="/" element={<HotelDetailPage />} />

          {/* แสดงหน้า BookingPage เมื่อเข้าถึง path "/booking" */}
          <Route path="/booking" element={<BookingWithNavigation />} />

          {/* แสดงหน้า PaymentPage เมื่อเข้าถึง path "/payment" */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// คอมโพเนนต์สำหรับการจองที่รวมฟังก์ชันการนำทาง
function BookingWithNavigation() {
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const handleBooking = () => {
    setShowPaymentPage(true); // เปลี่ยนไปแสดงหน้า PaymentPage
  };

  return showPaymentPage ? (
    <PaymentPage onCancel={() => setShowPaymentPage(false)} />
  ) : (
    <BookingPage onBook={handleBooking} />
  );
}

export default App;
