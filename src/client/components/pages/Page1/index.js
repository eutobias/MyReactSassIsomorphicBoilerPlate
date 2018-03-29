import React, { Component } from "react";

import Header from '../../organisms/Header'
import ImageLoader from '../../atoms/ImageLoader'
import Title from '../../atoms/Title'

class Page1 extends Component {

  render() {
    return (
      <div>
        <Header/>

        <Title>Page 1</Title>

        <ImageLoader className="image" source="./assets/keen.png" />
        <p>Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Quem manda na minha terra sou euzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
      </div>
    );
  }
}

export default Page1