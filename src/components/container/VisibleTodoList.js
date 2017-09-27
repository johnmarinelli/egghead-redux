import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../../reducers';
import TodoList from '../presentational/TodoList';
import { toggleTodo } from '../../action-creators';
import { fetchTodos } from '../../db';

/*
 * returns props that depend on current state
 * of redux store
 */
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';

  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

/*
 * shorthand for mapDispatchToProps
 * attributeName: associated callback handler to wrap in dispatch()
 */
const dispatchToProps = {
  onTodoClick: toggleTodo
};

class VisibleTodoList extends Component {
  componentDidMount () {
    fetchTodos(this.props.filter)
      .then(todos => console.log(this.props.filter, todos));;
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter)
        .then(todos => console.log(this.props.filter, todos));;
    }
  }

  render () {
    return (
      <TodoList {...this.props} />
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
  connect(mapStateToProps, dispatchToProps)(VisibleTodoList)
);

export default VisibleTodoList;
