import React, { Component } from "react";
import { render } from "react-dom";

import InlineSVG from './components/atoms/InlineSVG'
import ImageLoader from './components/atoms/ImageLoader'

import './scss/style.scss'

export default class Hello extends Component {

  render() {
    return (
      <div>
        Hello from react
        <InlineSVG source="./assets/app-cloud.svg" />
        <ImageLoader className="image" source="./assets/keen.png" />
      </div>
    );
  }
}


render(<Hello />, document.getElementById("app"));
