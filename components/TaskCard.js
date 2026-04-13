'use client';

export default function TaskCard({ id, title, done, onToggle, onDelete }) {

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow">

      <span className={done ? "line-through text-gray-400" : "text-pink-900"}>
        {title}
      </span>

      <div className="flex gap-2">
        <button onClick={() => onToggle(id)} className="bg-green-400 px-2 rounded">✔</button>
        <button onClick={() => onDelete(id)} className="bg-red-400 px-2 rounded">✖</button>
      </div>

    </div>
  );
}

