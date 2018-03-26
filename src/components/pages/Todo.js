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

import "../../scss/pages/todos.scss";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Title level="4">Todo List</Title>
        <AddTodoForm addTodo={this.props.addTodo} />
        <TodoList todos={this.props.todos} onTodoClick={this.props.toggleTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    },
    toggleTodo: text => {
      dispatch(toggleTodo(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
