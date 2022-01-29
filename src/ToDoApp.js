import React, { useReducer } from "react";
import { GridTodo } from "./components/GridTodo";
import { NewTodoInput } from "./components/NewTodoInput";
import { getDate } from "./helpers/getDate";
import { todoReducer } from "./helpers/todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    title: "first task",
    date: getDate(),
    done: false,
  },
];

const ToDOApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>ToDoApp</h1>
      <div className="app-container">
        <NewTodoInput dispatch={dispatch} />

        <GridTodo todos={todos} />
      </div>
    </>
  );
};

export default ToDOApp;
