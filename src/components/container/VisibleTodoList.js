import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../../reducers';
import TodoList from '../presentational/TodoList';
import * as actions from '../../action-creators';
import FetchError from '../presentational/FetchError';

/*
 * returns props that depend on current state
 * of redux store
 */
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';

  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  };
};

class VisibleTodoList extends Component {
  fetchData () {
    const { filter, fetchTodos } = this.props;
    /*
     * fetch todos is an async action creator 
     * that returns a thunk
     */
    fetchTodos(filter);
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  render () {
    const { toggleTodo, todos, errorMessage, isFetching } = this.props;
    
    if (isFetching && !todos.length) {
      return (<p>Loading...</p>);
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()} />
      );
    }
    
    /*
     * need to manually set onTodoClick 
     * because the action defined in action-creators
     * doesn't have the same name
     */
    return (
      <TodoList 
        todos={todos} 
        onTodoClick={toggleTodo} />
    );
  }
}

/*
 * connect the functions that map 
 * redux store state to props,
 * and callback handlers that use store.dispatch
 * pass presentational component since connect() is curried
 */
VisibleTodoList = withRouter(
  connect(mapStateToProps, actions)(VisibleTodoList)
);

export default VisibleTodoList;
