// EventForm.js
import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ onSubmit, onDiscard, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [date, setDate] = useState(initialData.date || '');
  const [startTime, setStartTime] = useState(initialData.startTime || '');
  const [endTime, setEndTime] = useState(initialData.endTime || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, startTime, endTime });
  };

  return (
    <div className="event-form">
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
        <button type="button" onClick={onDiscard}>Discard</button> {/* Discard button */}
      </form>
    </div>
  );
};

export default EventForm;
