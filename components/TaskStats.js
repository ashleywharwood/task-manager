export default function TaskStats({ tasks, onClear }) {

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const active = total - done;

  return (
    <div className="mt-4 flex justify-between items-center text-pink-900">
      <div>
        Total: {total} | Active: {active} | Done: {done}
      </div>

      <button onClick={onClear} className="bg-pink-500 text-white px-3 rounded-full">
        Clear Completed
      </button>
    </div>
  );
}

