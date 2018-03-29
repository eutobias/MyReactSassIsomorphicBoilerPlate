import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddTodoForm = props => {
  const { addTodo } = props;
  let input;

  return (
    <div className="add_todo_form">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
