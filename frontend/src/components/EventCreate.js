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

  
};

export default EventCreate;
