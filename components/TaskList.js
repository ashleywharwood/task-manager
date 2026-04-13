import TaskCard from "./TaskCard";

// COMPONENT: TaskList
export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          {...task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

