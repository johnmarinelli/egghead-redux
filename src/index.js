import  React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configure-store';
import Root from './components/Root';

const rootEl = document.getElementById('root');

const store = configureStore();
ReactDOM.render(
  <Root store={store}/>,
  rootEl
);
