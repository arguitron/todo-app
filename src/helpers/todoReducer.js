import { getDate } from "./getDate";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload,
          date: getDate(),
          done: false,
        },
      ];

    case "done":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "edit":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.data,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
