import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import todo from './reducers';

/*
 * receives store
 * returns a function that returns a function
 * (curried function)
const addPromiseSupportToDispatch = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }

  return next(action);
};
*/

/*
 * redux store -> next middleware function -> dispatched action
 * if action is a function, it is a thunk that wants
 * store.dispatch injected into it
 * order of arguments:
 * otherwise, proceed to next middleware
const thunk = (store) => (next) => (action) => 
  typeof action === 'function' ? 
    action(store.dispatch, store.getState) :
    next(action);
*/

const configureStore = () => {
  const middlewares = [thunk, logger];
  const store = createStore(todo, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
