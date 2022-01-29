import React, { useState } from "react";

export const NewTodoInput = ({ dispatch }) => {
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.length > 2) {
      dispatch({
        type: "add",
        payload: state,
      });
      setState("");
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="task"
          onChange={(e) => setState(e.target.value)}
          value={state}
          autoComplete="off"
          placeholder="What are we gonna do?"
        />
        <button className="btn-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
