import React, {Component} from 'react'
import './assets/App.css'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArreyNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArreyNotas
    }
    this.setState(novoEstado);
  }
  
  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }
  render() {
    return ( 
      <section className="conteudo">
        <FormularioCadastro criarNota = {this.criarNota.bind(this)}/ >
        <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas = {this.state.notas}/>
      </section>
    );
  }
}

export default App;