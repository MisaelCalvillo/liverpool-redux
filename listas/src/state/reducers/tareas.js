import types from './../types';

function tareas(state = [], action) {
  console.log('REDUCER TAREAS', action);
  switch(action.type) {
    case types.AGREGAR_TAREA: 
      return state.concat([action.tarea]);
    case types.COMPLETAR_TAREA: 
        return state.map((tarea) => tarea.id !== action.id ? tarea : { ...tarea, completed: !tarea.completed });
    case types.ELIMINAR_TAREA: 
      return state.filter((tarea) => tarea.id !== action.id);;
    default: 
      return state;
  }
}

export default tareas;