function tareas(state = [], action) {
  console.log('REDUCER TAREAS', action);
  switch(action.type) {
    case AGREGAR_TAREA: 
      return state.concat([action.tarea]);
    case COMPLETAR_TAREA: 
      return state;
    case ELIMINAR_TAREA: 
      return state.filter((tarea) => tarea.id !== action.id);;
    default: 
      return state;
  }
}