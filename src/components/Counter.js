import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * passing onIncrement and onDecrement as callbacks 
 * removes the redux dependency from this react component
 * makes Counter a "dumb" component
 */
export default class Counter extends Component {
  propTypes: { 
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        {' '}
      </p>
    );
  }
};
