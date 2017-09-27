import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action-creators';

/*
 * could be presentational or container.
 * keeping them together bc there isn't any state,
 * and very simple ui
 *
 * context is second argument for stateless functional components
 */
let AddTodo = (
  { dispatch } 
) => {
  let input;
  const dispatchAddTodo = () => {
    dispatch(addTodo(input.value))

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
            dispatchAddTodo();
          }
        }}/>
      <button onClick={dispatchAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

/*
 * no props that depend on redux state store.
 * null `mapPropsToState` says we don't calculate
 * props based on state.  prevents unnecessary store.subscribe
 * inject dispatch into AddTodo
 * if no arguments are passed to connect,
 * it doesn't subscribe to the store
 * and passes { dispatch } as a prop to the component
 */
AddTodo = connect()(AddTodo);

export default AddTodo;
