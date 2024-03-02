import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-xl font-bold mt-12 text-red-500">TODO List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
