import React, { useReducer, createContext } from "react";
import { GridTodo } from "./components/GridTodo";
import { NewTodoInput } from "./components/NewTodoInput";
import { getDate } from "./helpers/getDate";
import { todoReducer } from "./helpers/todoReducer";

export const DispatchContext = createContext(null);

export const ToDOApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <>
      <h1>ToDoApp</h1>
      <DispatchContext.Provider value={dispatch}>
        <div className="app-container">
          <NewTodoInput dispatch={dispatch} />

          <GridTodo todos={todos} />
        </div>
      </DispatchContext.Provider>
    </>
  );
};
