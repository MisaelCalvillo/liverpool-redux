function crearMeta(meta) {
  return {
    type: AGREGAR_META,
    meta: meta
  }
}

function eliminarMeta(id) {
  return {
    type: ELIMINAR_META,
    id
  }
}

function toggleMeta(id) {
  return {
    type: COMPLETAR_META,
    id
  }
}