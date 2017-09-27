import React from 'react';

export default function Todo ({
  onClick,
  completed,
  text
}) {
  return (
    <li 
      onClick={onClick}
      style={completed ? {textDecoration: 'line-through'} : {} }>
      {text}
    </li>
  );
};
