import React, { Component } from "react";
import { Link } from "react-router-dom";

const FilterTodoBar = props => {
  return (
    <ul className="filterTodoList">
      <li>Filter</li>
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
  );
};

export default FilterTodoBar;
