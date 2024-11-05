import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState(15000);

  const handleFilterChange = () => {
    onFilter({ type, maxPrice });
  };

  return (
    <div className="filter-bar">
      <select onChange={(e) => setType(e.target.value)}>
        <option value="">เลือกประเภทห้องพัก</option>
        <option value="Superior">Superior</option>
        <option value="Deluxe">Deluxe</option>
      </select>
      <input
        type="range"
        min="0"
        max="15000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterChange}>กรอง</button>
    </div>
  );
};

export default FilterBar;
