// pages/home.js (or wherever you want SSR data)

import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import '../components/Home.css';

export default function Home({ serverData }) {
  const [showForm, setShowForm] = useState(false);

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleDiscardClick = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Calendarium.io</h2>
        <p>{serverData}</p> {/* Display SSR data */}
      </div>

      {showForm && (
        <div className="event-form-container">
          <EventForm onSubmit={() => {}} onDiscard={handleDiscardClick} />
        </div>
      )}

      <Calendar />
    </div>
  );
}

// Server-side logic in getServerSideProps
export async function getServerSideProps() {
  // Here you can fetch data from APIs, databases, etc.
  const serverData = 'This is data fetched from the server'; // Example data

  return {
    props: { serverData }, // The props will be passed to the component
  };
}
