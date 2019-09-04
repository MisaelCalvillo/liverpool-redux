import types from './../types';

export function crearTarea(tarea) {
  return {
    type: types.AGREGAR_TAREA,
    tarea: tarea
  }
}

export function eliminarTarea(id) {
  return {
    type: types.ELIMINAR_TAREA,
    id
  }
}
