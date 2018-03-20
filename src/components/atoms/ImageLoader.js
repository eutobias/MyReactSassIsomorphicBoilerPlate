import React, { Component } from "react";

const ImageLoader = (props) => {
  const { className, source } = props
  const _require = require.context('../../', true)
  return (
    <img
      className={`${className || ''}`} 
      src={_require(source, true) } />
  )
}

export default ImageLoader