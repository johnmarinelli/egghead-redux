import { v4 } from 'node-uuid';
import * as api from '../db';

export const addTodo = (text) => (
  {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
)

export const toggleTodo = (id) => (
  {
    type: 'TOGGLE_TODO',
    id
  }
);

/*
 * receives server response as argument
 */
export const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

/*
 * async action creator
 * fetchTodos returns a promise that resolves to the action object
 * receiveTodos is synchronous
 */
export const fetchTodos = (filter) => 
  api.fetchTodos(filter)
    .then(response => 
      receiveTodos(filter, response));


export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
});
