'use client';
import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

// COMPONENT: TaskBoard
// PURPOSE: Main controller — stores all task data and handles logic
export default function TaskBoard() {

  // STATE: stores tasks
  const [tasks, setTasks] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // STATE: controls filter
  const [filter, setFilter] = useState("all");

  // EFFECT: save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD TASK
  function handleAdd(title) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title,
      done: false
    }]);
  }

  // TOGGLE TASK
  function handleToggle(id) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  // DELETE TASK
  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  // CLEAR COMPLETED
  function handleClear() {
    setTasks(tasks.filter(t => !t.done));
  }

  // FILTER LOGIC (derived value — not state)
  const filteredTasks =
    filter === "all" ? tasks :
    filter === "done" ? tasks.filter(t => t.done) :
    tasks.filter(t => !t.done);

  return (
    <div className="bg-gray-800 p-4 rounded-xl">

      <AddTaskForm onAdd={handleAdd} />

      <div className="flex gap-2 my-3">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("done")}>Done</button>
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

