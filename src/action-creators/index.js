import * as api from '../db';
import { getIsFetching } from '../reducers';
import { normalize } from 'normalizr';
import * as schema from './schema';


/*
 * thunk action creator
 */
export const addTodo = (text) => (dispatch) => 
  api.addTodo(text)
    .then(response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      });
    })

export const toggleTodo = (id) => (dispatch) => 
  api.toggleTodo(id)
    .then(response => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      });
    });

/*
 * functions that are returned from other functions are called thunks
 * thunks are used in redux as _async action creators_
 * manually dispatches a REQUEST_TODOS action
 * returns a promise
 */
export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  /*
   * dispatch 2 actions
   */
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });
  
 return api.fetchTodos(filter)
   .then(response => {
     dispatch({
       type: 'FETCH_TODOS_SUCCESS',
       filter,
       response: normalize(response, schema.arrayOfTodos)
     });
   },
   error => {
     dispatch({
       type: 'FETCH_TODOS_FAILURE',
       filter,
       message: error.message || 'Something went wrong.'
     });
   });
};

