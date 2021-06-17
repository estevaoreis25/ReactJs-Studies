import React, { Component } from "react";
import './style.css';

 class FormularioCadastro extends Component {
   
   constructor(props){
     super(props);
     this.titulo = "";
     this.nota = "";
   }

   _handleMudancaTitulo(evento){
      evento.stopPropagation();
      this.titulo = evento.target.value;
   }
   _handleNota(evento){
    evento.stopPropagation();
    this.nota = evento.target.value;
   }
   _criarNota(evento){
     evento.preventDefault();
     evento.stopPropagation();
     this.props.criarNota(this.titulo, this.nota);
   }

  render() {
    return (
        <form className="form-cadastro"
          onSubmit = {this._criarNota.bind(this)}
        >
          <input 
            type="text" 
            placeholder="Título" 
            className="form-cadastro_input"
            onChange = {this._handleMudancaTitulo.bind(this)}
          />
          <textarea 
            rows = {15}
            placeholder="Escreva sua nota..." 
            className="form-cadastro_input"
            onChange = {this._handleNota.bind(this)}
            
            />
          <button className="form-cadastro_input form-cadastro_submit">
            Criar nota
          </button>
        </form>
    );
  }
}
export default FormularioCadastro;