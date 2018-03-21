import React, { Component } from "react";

const Box = (props) => {
  const { className } = props

  return (
    <div className={`box ${className ? className : ''}`}>{props.children}</div>
  )
}

export default Box