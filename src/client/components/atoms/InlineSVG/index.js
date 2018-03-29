import React, { Component } from "react";

const InlineSVG = (props) => {
  const { className, source } = props
  const _require = require.context('../../../', true)
  return (
    <span 
      className={`svg-icon ${className ? className : ''}`} 
      dangerouslySetInnerHTML={{ __html: _require(source, true) }} />
  )
}

export default InlineSVG