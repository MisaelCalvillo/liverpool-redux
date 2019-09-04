import React from 'react';

function Lista({ elementos }) {
  return (
    <ul>
        {elementos.map(e => (
          <li key={e.id}>
            <span>
              {e.text}
            </span>
          </li>
        ))}
    </ul>
  )
}

export default Lista