import React, { Component, Fragment } from 'react';
import Header from './components/header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formuario'

//e98b70a5399e4e919ef805eab8b3d721
class App extends Component {
  state = {
    noticias: []
  }

  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=e98b70a5399e4e919ef805eab8b3d721`

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }



  render() {
    return (
      <Fragment>
        <Header
          titulo='Noticias React Api'
        />
        <div className="container white contenedor-noticias">

          <Formulario
            consultarNoticias={this.consultarNoticias}  //pasamos como prop al formulario
          />

          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>

      </Fragment>

    );
  }
}

export default App;


