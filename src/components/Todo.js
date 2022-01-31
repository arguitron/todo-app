import React, { useContext, useState } from "react";
import { DispatchContext } from "../ToDoApp";
import { EditPanel } from "./EditPanel";

export const Todo = ({ todo }) => {
  const dispatch = useContext(DispatchContext);
  const [edit, setEdit] = useState(false);
  const handleCheck = () => {
    dispatch({ type: "done", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "delete", payload: todo.id });
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="todo-card">
      <div className="card-top">
        <i onClick={handleDelete} className="fas fa-times-circle"></i>
        <span>{todo.date}</span>
      </div>

      <div className="card-body">
        {edit ? (
          <EditPanel setEdit={setEdit} todo={todo} dispatch={dispatch} />
        ) : (
          <h2 className={todo.done ? "checked" : ""}>{todo.title}</h2>
        )}
        <div className="edit">
          <i onClick={handleEdit} className="fas fa-edit"></i>
        </div>
      </div>
      <button className="btn-add" onClick={handleCheck}>
        Done!
      </button>
    </div>
  );
};
