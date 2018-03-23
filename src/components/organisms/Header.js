import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/page-1">Page 1</Link>
    </li>
    <li>
      <Link to="/todo">Todo App</Link>
    </li>
  </ul>
  )

}

export default Header