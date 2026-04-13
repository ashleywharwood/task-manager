'use client';

// COMPONENT: TaskCard
export default function TaskCard({ id, title, done, onToggle, onDelete }) {

  return (
    <div className="flex justify-between bg-gray-700 p-2 rounded">

      <span className={done ? "line-through text-gray-400" : ""}>
        {title}
      </span>

      <div className="flex gap-2">
        <button onClick={() => onToggle(id)}>✔</button>
        <button onClick={() => onDelete(id)}>✖</button>
      </div>

    </div>
  );
}

