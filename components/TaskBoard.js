'use client';

import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd(title) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }

  function handleToggle(id) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function handleClear() {
    setTasks(tasks.filter(t => !t.done));
  }

  const filteredTasks =
    filter === "all" ? tasks :
    filter === "done" ? tasks.filter(t => t.done) :
    tasks.filter(t => !t.done);

  return (
    <div className="bg-pink-200 p-5 rounded-2xl">

      <AddTaskForm onAdd={handleAdd} />

      <div className="flex gap-2 my-4">
        <button onClick={() => setFilter("all")} className="bg-pink-400 px-3 py-1 rounded-full text-white">All</button>
        <button onClick={() => setFilter("active")} className="bg-pink-400 px-3 py-1 rounded-full text-white">Active</button>
        <button onClick={() => setFilter("done")} className="bg-pink-400 px-3 py-1 rounded-full text-white">Done</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <TaskStats tasks={tasks} onClear={handleClear} />

    </div>
  );
}

