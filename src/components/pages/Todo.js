import React, { Component } from "react";
import { render } from "react-dom";

import Header from "../organisms/Header";
import InlineSVG from "../atoms/InlineSVG";
import ImageLoader from "../atoms/ImageLoader";
import Title from "../atoms/Title";
import AddTodoForm from "../molecules/AddTodoForm";
import TodoList from "../molecules/TodoList";
import FilterTodoBar from "../molecules/FilterTodoBar";

import { connect } from "react-redux";
import { addTodo, setVisibilityFilter, toggleTodo } from "../../actions";

class Todo extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title level="4">Todo List</Title>
        <AddTodoForm addTodo={addTodo} />
        <TodoList onTodoClick={toggleTodo} />
        <FilterTodoBar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(Todo);
