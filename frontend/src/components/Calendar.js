import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    // Fill array with dates for the 6x7 grid
    const daysArray = new Array(42).fill(null);
    for (let i = 0; i < daysInMonth; i++) {
      daysArray[firstDay + i] = i + 1;
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysArray = generateCalendar();

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>

        <div className="calendar-grid">
          {/* Weekday Headers */}
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <div key={day} className="calendar-cell header">
              {day}
            </div>
          ))}

          {/* Days Grid */}
          {daysArray.map((day, index) => (
            <div key={index} className={`calendar-cell day ${day ? 'filled' : 'empty'}`}>
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
