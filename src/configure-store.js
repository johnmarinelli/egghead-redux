import logger from 'redux-logger';
import { createStore } from 'redux';
import todo from './reducers';

/*
 * receives store
 * returns a function that returns a function
 * (curried function)
 */
const addPromiseSupportToDispatch = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }

  return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares
    .reverse()
    .forEach((mw) => store.dispatch = mw(store)(store.dispatch));
};

const configureStore = () => {
  const store = createStore(todo);
  const middlewares = [addPromiseSupportToDispatch, logger];
  wrapDispatchWithMiddlewares(store, middlewares);
  return store;
};

export default configureStore;
