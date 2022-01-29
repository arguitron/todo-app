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

    default:
      return state;
  }
};
