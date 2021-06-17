import React, {Component} from 'react'
import './assets/App.css'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'

class App extends Component {
  criarNota(titulo, nota){
    console.log(`${titulo}, ${nota}`);
  }
  render() {
    return ( 
      <section className="conteudo">
      <FormularioCadastro criarNota = {this.criarNota}/ >
      <ListaDeNotas/>
      </section>
    );
  }
}

export default App;