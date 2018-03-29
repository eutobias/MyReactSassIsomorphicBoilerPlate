import React, { Component } from "react"
import Title from '../../atoms/Title'
import InlineSVG from '../../atoms/InlineSVG'
import { Link } from "react-router-dom"

class Error404 extends Component {

  render() {
    return (
      <div>
        <Title level="1">Error 404</Title>
        <p>Page not found.</p>
        <InlineSVG source="./assets/app-cloud.svg" />
        <Link to="/">Go back to the main page</Link>
      </div>
    );
  }
}

export default Error404