'use client';

// Import useState hook to manage input state
import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {

  // State to store the current value of the input field
  const [title, setTitle] = useState("");

  // Handles form submission when user adds a task
  function handleSubmit(e) {
    e.preventDefault(); // Prevents page refresh

    // Prevent adding empty or whitespace-only tasks
    if (!title.trim()) return;

    // Calls parent function to add the task
    onAdd(title);

    // Clears input field after adding task
    setTitle("");
  }

  return (
    // Form container for adding new tasks
    <form onSubmit={handleSubmit} className="flex gap-2">

      {/* Input field for entering a new task */}
      <input
        className="flex-1 p-2 rounded-full text-black border border-pink-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Updates state as user types
        placeholder="Add Task"
      />

      {/* Button to submit the form and add the task */}
      <button className="bg-pink-500 text-white px-4 rounded-full">
        Add
      </button>

    </form>
  );
}

