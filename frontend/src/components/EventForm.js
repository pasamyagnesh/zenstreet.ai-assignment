// EventForm.js
import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ onSubmit, onDiscard, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [date, setDate] = useState(initialData.date || '');
  const [startTime, setStartTime] = useState(initialData.startTime || '');
  const [endTime, setEndTime] = useState(initialData.endTime || '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date || !startTime || !endTime) {
      setError('All fields are required.');
      return;
    }

    const eventData = { title, date, startTime, endTime };

    // Call the API route to submit data
    const response = await fetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });
    
    if (response.ok) {
      onSubmit(eventData);
    } else {
      setError('Failed to save event.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <button type="submit">Save Event</button>
      <button type="button" onClick={onDiscard}>Discard</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default EventForm;
