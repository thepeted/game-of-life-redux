import React from 'react';

export default ({title, handleClick}) => (
  <button onClick={handleClick}>
    {title}
  </button>
)
