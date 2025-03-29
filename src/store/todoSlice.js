import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Complete Redux Setup",
    description: "Set up Redux store and slices for the project",
    isCompleted: false,
    date: new Date().toISOString(), // March 20, 2024
    priority: "high",
  },
  {
    id: 2,
    title: "Design UI with Material UI",
    description: "Use Material UI components for a clean UI",
    isCompleted: false,
    date: new Date().toISOString(), // March 21, 2024
    priority: "medium",
  },
  {
    id: 3,
    title: "Implement Drag & Drop",
    description: "Add drag-and-drop functionality for reordering tasks",
    isCompleted: false,
    date: new Date().toISOString(), // March 22, 2024
    priority: "high",
  },
  {
    id: 4,
    title: "Store Todos in Local Storage",
    description: "Ensure tasks persist using localStorage",
    isCompleted: true,
    date: new Date().toISOString(), // March 18, 2024
    priority: "low",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log("add todo");
    },
    deleteTodo(state, action) {
      // TODO:
    },
    updateTodo(state, action) {
      // TODO:
    },
    completeTodo(state, action) {
      // TODO:
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
