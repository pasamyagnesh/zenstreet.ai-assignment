import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import '../components/Home.css'; // Ensure Home.css is in the correct path

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
      
        <h2 className="title">Calendarium.io</h2>
      </div>

      {/* Conditionally render EventForm if showForm is true */}
      {showForm && (
        <div className="event-form-container">
          <EventForm onSubmit={() => {}} onDiscard={handleDiscardClick} /> {/* Pass onDiscard prop */}
        </div>
      )}

      <Calendar />
    </div>
  );
}
