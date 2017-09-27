import React from 'react';

export default function Footer () {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      {' '}
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    </p>
  );
};
