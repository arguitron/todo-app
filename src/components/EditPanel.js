import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";

export const EditPanel = ({ todo, setEdit, dispatch }) => {
  const editInput = useRef(null);

  useEffect(() => {
    editInput.current.focus();
  }, []);

  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      payload: {
        id: todo.id,
        data: state,
      },
    });
    setEdit((edit) => !edit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="edit"
        value={state}
        placeholder="new task"
        autoComplete="off"
        onChange={handleChange}
        ref={editInput}
        className="edit-input"
        type="text"
      />
    </form>
  );
};
