import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./Slices/TodoSlice";
import singleTodoReducer from "./Slices/SingleTodoSlice";
import userReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    singleTodo: singleTodoReducer,
    user: userReducer,
  },
});

export default store;