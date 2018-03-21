import React, { Component } from "react";

const Title = (props) => {
  const { className, level } = props
  const Tag = `h${level || 1}`

  return (
    <Tag className={`title ${className ? className : ''}`}>{props.children}</Tag>
  )
}

export default Title