import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { useState } from "react";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <h1 className="">Task Management</h1>
      <AddTodo />
    </div>
  );
}

function TodoItem({ todo }) {
  return <div>hi there</div>;
}

function AddTodo() {
  const today = new Date().toISOString().split("T")[0];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [date, setDate] = useState(today);
  const dispatch = useDispatch();
  console.log(date);
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;
    const newTodo = {
      id: Date.now(),
      title,
      description,
      isCompleted: false,
      date,
      priority,
    };
    console.log("submitted");
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
    setPriority("low");
    setDate(today);
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex w-96 flex-col gap-4 rounded-lg bg-gray-900 p-6 text-white shadow-md"
    >
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo..."
        className="rounded border bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        className="rounded border bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-4">
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          className="w-full rounded border bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded border bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
}
