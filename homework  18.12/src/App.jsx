import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails";
import UserDetailPage from "./Components/UserDetailPage";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoDetails />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
