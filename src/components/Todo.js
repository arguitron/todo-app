import React, { useContext } from "react";
import { DispatchContext } from "../ToDoApp";

export const Todo = ({ todo }) => {
  const dispatch = useContext(DispatchContext);
  const handleCheck = () => {
    dispatch({ type: "done", payload: todo.id });
  };
  const handleDelete = () => {
    dispatch({ type: "delete", payload: todo.id });
  };
  return (
    <div className="todo-card">
      <div className="card-top">
        <i onClick={handleDelete} className="fas fa-times-circle"></i>
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
