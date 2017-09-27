import React from 'react';
import './App.css';
import VisibleTodoList from './container/VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './container/Footer';

/*
 * params comes from react-router
 */
const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};
export default App;
