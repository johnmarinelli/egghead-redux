import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import todo from './reducers';

const configureStore = () => {
  const store = createStore(todo, applyMiddleware(logger));
  return store;
};

export default configureStore;
