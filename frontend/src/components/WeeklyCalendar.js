import React, { useState } from 'react';

const WeeklyCalendar = ({ onAddEvent }) => {
  // Add state for week navigation (example)
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Function to go to the previous week
  const handlePrevWeek = () => {
    setCurrentWeek(prev => new Date(prev.setDate(prev.getDate() - 7)));
  };

  // Function to go to the next week
  const handleNextWeek = () => {
    setCurrentWeek(prev => new Date(prev.setDate(prev.getDate() + 7)));
  };

  // Format the current week for display (Example: Week starting on Monday)
  const getWeekStartDate = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay(),
          diff = startOfWeek.getDate() - day + (day == 0 ? -6 : 1); // Adjust to Monday
    startOfWeek.setDate(diff);
    return startOfWeek.toDateString();
  };

  return (
    <div>
      <div className="calendar-header">
        <button onClick={handlePrevWeek}>&lt;</button>
        <span>{getWeekStartDate(currentWeek)} to {getWeekStartDate(new Date(currentWeek.setDate(currentWeek.getDate() + 6)))}</span>
        <button onClick={handleNextWeek}>&gt;</button>
      </div>

      <div className="calendar-body">
        {/* Render the days of the week here */}
      </div>

      <button className="add-event-btn" onClick={onAddEvent}>
        +
      </button>
    </div>
  );
};

export default WeeklyCalendar;
