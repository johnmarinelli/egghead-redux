import logger from 'redux-logger';
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

const configureStore = () => {
  const middlewares = [promise, logger];
  const store = createStore(todo, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
