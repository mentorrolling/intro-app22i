import React from "react";

const TodoForm = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Ingresá la tarea..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
