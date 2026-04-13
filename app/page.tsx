import TaskBoard from "../components/TaskBoard";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskBoard />
    </main>
  );
}

