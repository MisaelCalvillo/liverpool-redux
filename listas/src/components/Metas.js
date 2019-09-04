import React from 'react';
import { connect } from 'react-redux';
import { crearMeta, eliminarMeta, toggleMeta } from './../state/actions/metas';

import Lista from './Lista';

function generarId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

class Metas extends React.Component {
  state = {
    texto: ''
  }
  manejaCambioTexto = (e) => {
    this.setState({ texto: e.target.value })
  }
  creaMeta = () => {
    this.props.dispatch(crearMeta({
      text: this.state.texto,
      completed: false,
      id: generarId()
    }))
  }

  hacerSwitch = (id) => {
    this.props.dispatch(toggleMeta(id))
  }

  eliminar = (id) => {
    this.props.dispatch(eliminarMeta(id))
  }

  render() {
    console.log('PROPS metas', this.props);
    return (
      <div>
        <h1>Lista de Metas</h1>
        <input 
          type="text"
          placeholder="Agregar meta"
          value={this.state.texto}
          onChange={this.manejaCambioTexto}
        />
        <button onClick={this.creaMeta}>Agregar Meta</button>
        <Lista 
          elementos={this.props.metas}
          hacerSwitch={this.hacerSwitch}
          eliminar={this.eliminar}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    metas: state.metas
  }
}

export default connect(mapStateToProps)(Metas)