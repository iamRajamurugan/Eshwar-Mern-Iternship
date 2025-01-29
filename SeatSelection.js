import React, { useState } from "react";
import "./SeatSelection.css"; // Import the CSS file

const SeatSelection = () => {
  const [seats, setSeats] = useState(
    Array(50).fill("available") // Create an array of 50 seats with "available" status
  );

  const handleSeatClick = (index) => {
    const updatedSeats = [...seats];
    if (updatedSeats[index] === "available") {
      updatedSeats[index] = "selected";
    } else if (updatedSeats[index] === "selected") {
      updatedSeats[index] = "available";
    }
    setSeats(updatedSeats);
  };

  return (
    <div className="seat-selection-container">
      <h1>Select Your Seats</h1>
      <div className="seat-container">
        {seats.map((status, index) => (
          <div
            key={index}
            className={`seat ${status}`}
            onClick={() => handleSeatClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
