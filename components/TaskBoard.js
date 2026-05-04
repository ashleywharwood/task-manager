'use client';

// Import React hooks for managing state and side effects
import { useState, useEffect } from 'react';

// Import child components used within the task manager
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {

  // State to store all tasks in the application
  const [tasks, setTasks] = useState([]);

  // State to track the current filter (all, active, done)
  const [filter, setFilter] = useState("all");

  // Save tasks to localStorage whenever the task list changes
  // This allows data to persist even after refreshing the page
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adds a new task to the list with a unique ID and default "not done" status
  function handleAdd(title) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, done: false }]);
  }

  // Toggles the completion status of a task (done ↔ not done)
  function handleToggle(id) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  // Deletes a task from the list based on its ID
  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  // Clears all completed tasks from the list
  function handleClear() {
    setTasks(tasks.filter(t => !t.done));
  }

  // Filters tasks based on the selected filter
  // - "all" shows everything
  // - "done" shows completed tasks
  // - "active" shows incomplete tasks
  const filteredTasks =
    filter === "all" ? tasks :
    filter === "done" ? tasks.filter(t => t.done) :
    tasks.filter(t => !t.done);

  return (
    <div className="bg-pink-200 p-5 rounded-2xl">

      {/* Form component to add new tasks */}
      <AddTaskForm onAdd={handleAdd} />

      {/* Buttons to filter tasks based on their status */}
      <div className="flex gap-2 my-4">
        <button onClick={() => setFilter("all")} className="bg-pink-400 px-3 py-1 rounded-full text-white">All</button>
        <button onClick={() => setFilter("active")} className="bg-pink-400 px-3 py-1 rounded-full text-white">Active</button>
        <button onClick={() => setFilter("done")} className="bg-pink-400 px-3 py-1 rounded-full text-white">Done</button>
      </div>

      {/* Displays the list of tasks after filtering */}
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      {/* Displays task statistics and clear completed button */}
      <TaskStats tasks={tasks} onClear={handleClear} />

    </div>
  );
}
