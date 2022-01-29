import React from "react";

export const Todo = ({ todo }) => {
  const handleCheck = () => {
    todo.done = !todo.done;
  };
  return (
    <div className="todo-card">
      <div className="card-top">
        <i className="fas fa-times-circle"></i>
        <span>{todo.date}</span>
      </div>

      <div className="card-body">
        <h2 className={todo.done ? "checked" : ""}>{todo.title}</h2>
      </div>
      <button className="btn-add" onClick={handleCheck}>
        Done!
      </button>
    </div>
  );
};
