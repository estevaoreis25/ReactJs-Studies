import React, {
  Component
} from 'react'
import {
  ListaDeNotas
} from './components/ListaDeNotas.jsx'
import FormularioCadastro from './components/FormularioCadastro.jsx'

class App extends Component {
  render() {
    return ( 
      <>
      <FormularioCadastro / >
      <ListaDeNotas / >
      </>
    );
  }
}

export default App;