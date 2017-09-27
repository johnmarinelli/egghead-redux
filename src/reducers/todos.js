import { combineReducers } from 'redux';
import todo from './todo';

/*
 * state is list of todos indexed by id 
 */
const byId = (state = {}, action) => {
  /*
   * top level reducer for todos
   * delegates logic to the `todo` reducer
   */
  switch (action.type) {
    case 'ADD_TODO': 
    case 'TOGGLE_TODO': 
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default: return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default: return state;
  }
}

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all': return allTodos;
    case 'completed': return allTodos.filter(t => t.completed);
    case 'active': return allTodos.filter(t => !t.completed);
    default: return allTodos;
  }
};

