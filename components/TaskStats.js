// COMPONENT: TaskStats
export default function TaskStats({ tasks, onClear }) {

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const active = total - done;

  return (
    <div className="mt-4 flex justify-between items-center">
      <div>
        Total: {total} | Active: {active} | Done: {done}
      </div>

      <button onClick={onClear} className="bg-red-500 px-3 rounded">
        Clear Completed
      </button>
    </div>
  );
}

