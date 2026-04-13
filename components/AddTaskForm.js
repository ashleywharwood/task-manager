'use client';
import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {

  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 p-2 rounded-full text-black border border-pink-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add something cute ✨"
      />
      <button className="bg-pink-500 text-white px-4 rounded-full">
        Add
      </button>
    </form>
  );
}

