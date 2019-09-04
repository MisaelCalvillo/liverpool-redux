import types from './../types';

export function crearMeta(meta) {
  return {
    type: types.AGREGAR_META,
    meta: meta
  }
}

export function eliminarMeta(id) {
  return {
    type: types.ELIMINAR_META,
    id
  }
}

export function toggleMeta(id) {
  return {
    type: types.COMPLETAR_META,
    id
  }
}