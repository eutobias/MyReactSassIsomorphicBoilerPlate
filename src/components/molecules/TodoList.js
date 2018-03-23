import React, { Component } from "react";
import { Link } from "react-router-dom";

const TodoList = props => {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {todos &&
        todos.map((todo, key) => {
          <li key={todo.id} onClick={()=>onTodoClick(todo.id)}>{todo.text}</li>;
        })}
    </ul>
  );
};

export default TodoList;
