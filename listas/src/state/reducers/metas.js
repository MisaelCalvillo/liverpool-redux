import types from './../types';

function metas(state = [], action) {
  console.log('REDUCER METAS', action);
  switch(action.type) {
    case types.AGREGAR_META: 
      return state.concat([action.meta]);
    case types.COMPLETAR_META: 
      console.log('COMPLETAR META', action.id);

      return state.map((meta) => meta.id !== action.id ? meta : { ...meta, completed: !meta.completed });
    case types.ELIMINAR_META: 
      return state.filter((meta) => meta.id !== action.id);
    default: 
      return state;
  }
}

export default metas;