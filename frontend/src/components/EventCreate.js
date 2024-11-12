// components/EventCreate.js
import React, { useState } from 'react';

const EventCreate = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date().toISOString().slice(0, 16)); // Default to current date and time

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure taskTitle is not empty
    if (!taskTitle) {
      alert('Title is needed');
      return;
    }

    // Create the task object
    const newTask = {
      title: taskTitle,
      description: taskDescription || 'No description', // Default description if none is provided
      date: taskDate,
    };

    // Call the addTask function to save the task
    addTask(newTask);

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate(new Date().toISOString().slice(0, 16)); // Reset to current date/time
  };

  return (
    <div className="event-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Optional"
          />
        </div>
        <div>
          <label>Date and Time</label>
          <input
            type="datetime-local"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={() => alert('Discarded')}>Discard</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EventCreate;
