import React, { useState } from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import EventForm from '../components/EventForm';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addEvent = (eventData) => {
    // Send POST request to backend
    // Update state
    setEvents([...events, eventData]);
    setIsFormVisible(false);
  };

  return (
    <div>
      <WeeklyCalendar onAddEvent={() => setIsFormVisible(true)} />
      {isFormVisible && <EventForm onSubmit={addEvent} />}
    </div>
  );
};

export default HomePage;
