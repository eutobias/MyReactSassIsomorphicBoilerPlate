import React, { Component } from "react";
import { Link } from "react-router-dom";

const FilterTodoBar = props => {
  return (
    <ul>
      <li>Filter</li>
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
  );
};

export default FilterTodoBar;
