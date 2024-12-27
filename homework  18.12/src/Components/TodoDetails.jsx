import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchTodoById } from "../store/Slices/SingleTodoSlice";
import "./styles.css";

function TodoDetails() {
  const { id } = useParams();
  const todo = useSelector((state) => state.singleTodo.todo);
  const error = useSelector((state) => state.singleTodo.error);
  const loading = useSelector((state) => state.singleTodo.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching todo for ID:", id);
    dispatch(fetchTodoById(id));
  }, [dispatch, id]);

  console.log("Current todo object:", todo);
  console.log("User ID for this todo:", todo?.userId || "No userId available");

  if (loading || !todo || Object.keys(todo).length === 0) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="card">
      <h2>{todo.title}</h2>
      <p>Status: {todo.completed ? "Completed" : "Not completed"}</p>
      {todo.userId ? (
        <Link to={`/users/${todo.userId}`}>
          <button>View User Details</button>
        </Link>
      ) : (
        <p>No user details available</p>
      )}
      <Link to="/">
        <button style={{ marginLeft: "10px" }}>Back</button>
      </Link>
    </div>
  );
}

export default TodoDetails;
