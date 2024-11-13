import React, { useState, useEffect } from 'react';
import EventForm from './EventForm';
import './Calendar.css';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const sampleEvents = [
  {
    title: 'Meeting with Team',
    date: '2024-11-23',
    startTime: '10:00 AM',
    endTime: '11:00 AM'
  },
  {
    title: 'Project Review',
    date: '2024-11-14',
    startTime: '2:00 PM',
    endTime: '3:00 PM'
  },
  {
    title: 'Client Presentation',
    date: '2024-11-05',
    startTime: '1:00 PM',
    endTime: '2:30 PM'
  }
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState([]);

  // Colors for the tasks
  const colors = ['#fbbc04', '#4285f4', '#f72a25'];

  // Fetch events for the current month
  useEffect(() => {
    fetchMonthEvents();
  }, [currentDate]);

  const fetchMonthEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/events/month`, {
        params: {
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear(),
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents(sampleEvents); // Fallback to sample events if API call fails
    }
  };

  const handleEventSubmit = async (eventData) => {
    // Randomly select a color for the event
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const eventWithColor = { ...eventData, backgroundColor: randomColor };

    try {
      await axios.post(`${API_URL}/events`, eventWithColor);
      setShowEventForm(false);
      fetchMonthEvents();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const getEventsForDay = (day) => {
    if (!day) return [];
    const dateString = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

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
    setShowPopup(false);
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

  {daysArray.map((day, index) => {
    const dayEvents = getEventsForDay(day);
    return (
      <div
        key={index}
        className={`calendar-cell day ${day ? 'filled' : 'empty'}`}
        onClick={() => handleDayClick(day)}
      >
        <div className="day-number">{day || ''}</div>
        {dayEvents.length > 0 && (
          <div className="event-indicators">
            {dayEvents.map((event, idx) => (
              <div
                key={idx}
                className="event-title"
                title={event.title}
                style={{ backgroundColor: event.backgroundColor }}
              >
                {event.title.substring(0, 15)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  })}


        </div>
      </div>

      {/* Day Selection Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Event Details</h3>
            <p>Date Selected: {currentDate.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Selected Day: {selectedDay}</p>
            <button className="create-button" onClick={handleCreateEvent}>Create</button>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
