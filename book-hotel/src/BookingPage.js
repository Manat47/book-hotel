import React, { useState } from 'react';
import TopBar from './TopBar';
import BookingCard from './BookingCard';
import FilterBar from './FilterBar';

const BookingPage = ({ onBook }) => {
  // รายการห้องพักที่กำหนดค่าไว้ล่วงหน้า
  const [darkMode, setDarkMode] = useState(false);
  const rooms = [
    {
      image: "https://example.com/room1.jpg",
      type: "Superior King Size",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่"],
      guests: "2 ผู้เข้าพัก",
      price: 5488,
      isAvailable: true,
      rating: 7.9
    },
    {
      image: "https://example.com/room2.jpg",
      type: "Deluxe King Size",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "วิวทะเล"],
      guests: "2 ผู้เข้าพัก",
      price: 6193,
      isAvailable: false,
      rating: 8.2
    },
    {
      image: "https://example.com/room3.jpg",
      type: "Standard Twin",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "วิวเมือง"],
      guests: "2 ผู้เข้าพัก",
      price: 4500,
      isAvailable: true,
      rating: 7.5
    },
    {
      image: "https://example.com/room4.jpg",
      type: "Family Suite",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "ครัวขนาดเล็ก"],
      guests: "4 ผู้เข้าพัก",
      price: 8000,
      isAvailable: true,
      rating: 8.5
    },
    {
      image: "https://example.com/room5.jpg",
      type: "Presidential Suite",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "อ่างจากุซซี่"],
      guests: "2 ผู้เข้าพัก",
      price: 15000,
      isAvailable: false,
      rating: 9.0
    },
    {
      image: "https://example.com/room6.jpg",
      type: "Single Room",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่"],
      guests: "1 ผู้เข้าพัก",
      price: 3000,
      isAvailable: true,
      rating: 6.9
    },
    {
      image: "https://example.com/room7.jpg",
      type: "Double Room",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่"],
      guests: "2 ผู้เข้าพัก",
      price: 5000,
      isAvailable: false,
      rating: 7.3
    },
    {
      image: "https://example.com/room8.jpg",
      type: "Luxury Suite",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "วิวทะเล", "ห้องนั่งเล่น"],
      guests: "2 ผู้เข้าพัก",
      price: 12000,
      isAvailable: true,
      rating: 8.8
    },
    {
      image: "https://example.com/room9.jpg",
      type: "Economy Room",
      benefits: ["ฟรีอินเตอร์เน็ต"],
      guests: "1 ผู้เข้าพัก",
      price: 2500,
      isAvailable: true,
      rating: 6.5
    },
    {
      image: "https://example.com/room10.jpg",
      type: "Executive Suite",
      benefits: ["ฟรีอินเตอร์เน็ต", "ห้องปลอดบุหรี่", "วิวเมือง", "บริการอาหารเช้า"],
      guests: "2 ผู้เข้าพัก",
      price: 11000,
      isAvailable: true,
      rating: 9.2
    },
  ];

  // สร้าง state สำหรับกรองห้องพัก
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // ฟังก์ชันสำหรับกรองห้องพักตามเงื่อนไขที่ได้รับจาก FilterBar
  const handleFilter = (filter) => {
    const filtered = rooms.filter(room => {
      return (
        room.price <= filter.maxPrice &&
        (filter.type === "" || room.type.includes(filter.type))
      );
    });
    setFilteredRooms(filtered);
  };

  // ฟังก์ชันเมื่อทำการจองห้องพัก
  const handleBook = (roomType) => {
    alert(`จองห้อง ${roomType} สำเร็จ!`);
    onBook(); // เรียกฟังก์ชัน onBook เพื่อเปลี่ยนไปหน้า PaymentPage
  };

  return (
    <div className={`booking-page ${darkMode ? "dark-mode" : ""}`}>
      <TopBar title="Book a hotel" />
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <FilterBar onFilter={handleFilter} />
      <p>ที่นี่คือหน้าสำหรับการเลือกห้องพัก</p>
      {filteredRooms.map((room, index) => (
        <BookingCard key={index} room={room} onBook={handleBook} />
      ))}
    </div>
  );
};

export default BookingPage;
