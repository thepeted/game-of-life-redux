import React from 'react';

export default ({alive, newGen, handleClick}) =>
  (
      <td
        onClick={handleClick}
        className={`${alive ? 'alive' : ''} ${newGen ? 'new-gen' : ''}`}
        >
      </td>
    )
