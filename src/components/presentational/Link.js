import React from 'react';

/*
 * presentational component; doesn't know about behavior
 */
export default function Link ({active, children, onClick}) {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }} >
      {children}
    </a>
  );
};
