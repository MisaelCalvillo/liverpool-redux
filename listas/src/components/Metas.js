import React from 'react';
import { connect } from 'react-redux';
import { crearMeta } from './../state/actions/metas';

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
        {/* <Lista 
          elementos={this.props.metas}
        /> */}
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