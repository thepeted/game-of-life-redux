import React from 'react';

export default ({alive, handleClick}) =>
  (
      <td
        onClick={handleClick}
        style={{backgroundColor: alive ? 'blue' : ''}}
        >
      </td>
    )
