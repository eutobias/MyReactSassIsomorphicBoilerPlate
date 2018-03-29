import React, { Component } from "react";
import { render } from "react-dom";

import Header from '../../organisms/Header'
import InlineSVG from '../../atoms/InlineSVG'
import ImageLoader from '../../atoms/ImageLoader'
import Title from '../../atoms/Title'

class Home extends Component {

  render() {
    return (
      <div>
        <Header/>

        <Title>Hello from react</Title>
        <InlineSVG source="./assets/app-cloud.svg" />

        <p>Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Quem manda na minha terra sou euzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>

        <p>Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Cevadis im ampola pa arma uma pindureta.</p>

        <p>Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mim que vai caçá sua turmis!</p>

        <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Sapien in monti palavris qui num significa nadis i pareci latim. Viva Forevis aptent taciti sociosqu ad litora torquent.</p>
      </div>
    );
  }
}

export default Home