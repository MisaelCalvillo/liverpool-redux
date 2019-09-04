import React from 'react';

function Lista({ elementos, eliminar, hacerSwitch }) {
  return (
    <ul>
        {elementos.map(e => (
          <li key={e.id} style={{textDecoration: e.completed ? 'line-through' : 'none'}}>
            <span onClick={() => hacerSwitch(e.id)}>
              {e.text}
            </span>
            <button onClick={() => eliminar(e.id)}>X</button>
          </li>
        ))}
    </ul>
  )
}

export default Lista