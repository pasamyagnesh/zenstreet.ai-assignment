import React, { useState } from 'react';
import EventForm from './EventForm';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);

  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

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

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDay(day);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedDay(null);
  };

  const handleCreateEvent = () => {
    setShowEventForm(true);
    setShowPopup(false); // Close the popup if it's open
  };

  const handleEventSubmit = (eventData) => {
    console.log('Event created:', eventData);
    setShowEventForm(false);
  };

  const handleEventDiscard = () => {
    setShowEventForm(false);
  };

  const daysArray = generateCalendar();

  return (
    <div className="calendar-container">
      {/* Event Form Overlay */}
      {showEventForm && (
        <div className="popup-overlay" onClick={handleEventDiscard}>
          <div className="event-form-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Event</h2>
            <EventForm 
              onSubmit={handleEventSubmit}
              onDiscard={handleEventDiscard}
              initialData={{
                date: selectedDay ? new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toISOString().split('T')[0] : ''
              }}
            />
          </div>
        </div>
      )}

      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={handleNextMonth}>&gt;</button>
          <button className="create-button" onClick={handleCreateEvent}>
            {/* Replace Font Awesome icon with SVG for "plus" */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>

        <div className="calendar-grid">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <div key={day} className="calendar-cell header">
              {day}
            </div>
          ))}

          {daysArray.map((day, index) => (
            <div
              key={index}
              className={`calendar-cell day ${day ? 'filled' : 'empty'}`}
              onClick={() => handleDayClick(day)}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>

      {/* Day Selection Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Event Details</h3>
            <p>Date Selected: {currentDate.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Selected Day: {selectedDay}</p>
            <button className="create-button" onClick={handleCreateEvent}>Create Event</button>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
