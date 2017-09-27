import React from 'react';

export default function AddTodo () {
  let input;
  const addTodo = () => {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextId++,
      text: input.value
    })

    input.value = '';
  };

  return (
    <div>
    {/*
      * Ref callback attributes
      * when `ref` attr is a callback, 
      * this callback will be executed immediately after
      * component mounting.
      * the reference component is passed as a parameter 
      */}
      <input 
        ref={node => {
          input = node;
        }}
        onKeyUp={(e) => {
          if (13 === e.keyCode) {
            addTodo();
          }
        }}/>
      <button onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};
