import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { remove, changeStatus } from "../store/Slices/TodoSlice";

function SingleTodo({ todo }) {
  const { id, completed, title } = todo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigate() {
    navigate(`/todos/${id}`);
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      {/* Отображение названия задачи, с переходом на страницу деталей */}
      <p
        onClick={handleNavigate}
        style={{
          color: completed ? "gray" : "black",
          textDecoration: completed ? "line-through" : "",
          cursor: "pointer",
        }}
      >
        {title}
      </p>

      {/* Альтернативная ссылка на страницу деталей задачи */}
      <Link to={`/todos/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <h3>View Details</h3>
      </Link>

      {/* Чекбокс для изменения статуса задачи */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(changeStatus(id))}
      />

      {/* Кнопка для удаления задачи */}
      <button onClick={() => dispatch(remove(id))} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
}

export default SingleTodo;
