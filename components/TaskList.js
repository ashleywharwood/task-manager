// Displays a list of tasks by rendering a TaskCard for each one
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskCard
          key={task.id} // Required for list rendering
          {...task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}


