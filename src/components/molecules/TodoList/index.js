import React, { Component } from "react";
import { Link } from "react-router-dom";

const TodoList = props => {
  const { todos, onTodoClick } = props;
  return (
    <ul className="todoList">
      {todos &&
        todos.map((todo, key) => {
          return (
            <li
              className={todo.completed ? "done" : "not-done"}
              key={todo.id}
              onClick={() => onTodoClick(todo.id)}
            >
              {todo.text}
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
