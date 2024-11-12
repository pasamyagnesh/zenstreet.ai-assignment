import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import '../components/Home.css'; // Correct path to Home.css

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateClick = () => {
    setShowForm(true); // Show the EventForm when Create is clicked
  };

  const handleDiscardClick = () => {
    setShowForm(false); // Hide the EventForm when Discard is clicked
  };

  return (
    <div className="container">
      <div className="header">
        {/* Create Button */}
        <button className="create-button" onClick={handleCreateClick}>
          Create
        </button>

        {/* Calendar Title */}
        <h2 className="title">Calendarium.io</h2>
      </div>

      {/* Conditionally render EventForm if showForm is true */}
      {showForm && (
        <div className="event-form-container">
          <EventForm onSubmit={() => {}} /> {/* Pass an empty function or handle the form submission here */}
          <button onClick={handleDiscardClick}>Discard</button>
        </div>
      )}

      <Calendar />
    </div>
  );
}
