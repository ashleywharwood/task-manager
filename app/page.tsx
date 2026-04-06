'use client'
import { useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim() === '') return
    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>Task Manager</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </main>
  )
}