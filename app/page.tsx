import TaskBoard from "../components/TaskBoard";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-pink-100 text-pink-900">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Task Manager
      </h1>
      <TaskBoard />
    </main>
  );
}

