import React from 'react';
import { connect } from 'react-redux';
import Lista from './Lista';
import { crearTarea } from './../state/actions/tareas';

function generarId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

class Tareas extends React.Component  {

  agregarTarea = (e) => {
    e.preventDefault();
    const tareaTexto = this.texto.value;
    this.texto.value = '';

    this.props.dispatch(crearTarea({
      text: tareaTexto,
      completed: false,
      id: generarId()
    }))
  }

  render() {
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input 
          type="text"
          placeholder="Agregar tarea"
          ref={(input) => this.texto = input }
        />
        <button onClick={this.agregarTarea}>Agregar tarea</button>
        <Lista 
          elementos={this.props.tareas} 
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tareas: state.tareas
  }
}
export default connect(mapStateToProps)(Tareas);
