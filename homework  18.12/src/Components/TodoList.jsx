import React, { useEffect } from "react";
import { fetchTodos } from "../store/Slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./Single";

function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const error = useSelector((state) => state.todo.error);
  const loading = useSelector((state) => state.todo.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!list || list.length === 0) {
    return <h1>No Todos Found</h1>;
  }

  return (
    <div>
      {/* Отображаем все задачи через компонент SingleTodo */}
      {list.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
