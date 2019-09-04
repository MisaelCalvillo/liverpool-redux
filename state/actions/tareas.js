function crearTarea(tarea) {
  return {
    type: AGREGAR_TAREA,
    tarea: tarea
  }
}

function eliminarTarea(id) {
  return {
    type: ELIMINAR_TAREA,
    id
  }
}
