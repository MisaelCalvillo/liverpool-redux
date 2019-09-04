import { combineReducers } from 'redux';

import metas from './metas';
import tareas from './tareas';

export default combineReducers({
  metas,
  tareas
});