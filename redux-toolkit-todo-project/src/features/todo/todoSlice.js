import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

// function sayHello() {
//   console.log("Hello world");
// }

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: sayHello,
    // in state we get current state of the state, and in action we get data which is passeds
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
