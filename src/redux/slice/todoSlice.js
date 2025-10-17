import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveAllTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id != action.payload);
      state.todos = newTodos;
    },
    toggleTodo: (state, action) => {
      const currTodo = state.todos.find((todo) => todo.id == action.payload);
      currTodo.complete = !currTodo.complete;
    },
  },
});

export default todosSlice.reducer;
export const { saveAllTodos, addTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;
