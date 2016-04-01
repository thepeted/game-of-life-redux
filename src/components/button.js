import React from 'react';

export default ({title, icon, handleClick}) => (
  <span onClick={handleClick} className="button">
    <i className={icon}></i> {title}
  </span>
)
