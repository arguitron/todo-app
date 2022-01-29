import React from "react";
import { Todo } from "./Todo";

export const GridTodo = ({ todos }) => {
  return (
    <div className="grid-container">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
