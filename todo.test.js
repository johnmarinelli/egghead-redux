let { createStore } = require('redux');

/*
 * REDUCERS
 */

/*
 * individual reducer for a todo
 * Reducer composition - to manage multiple-reducer apps
 * One reducer gets called by another reducer to update items
 */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': return {
      id: action.id,
      text: action.text,
      completed: false
    };
    case 'TOGGLE_TODO': 
      if (state.id !== action.id) return state;
      else return Object.assign({}, state, { completed: !state.completed });
    default: return state;
  }
};

/*
 * top level todo reducer
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': return [...state, todo(null, action)];
    case 'TOGGLE_TODO': return state.map(t => todo(t, action));
    default: return state;
  }
};

/*
 * State filter
 */
const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': return action.filter;
    default: return state;
  }
};

/*
 * implementation of redux combineReducers
 * returns another reducer
 *
 * `reducers` looks like { `stateField`: `stateFieldReducerFn`, ... }
 */
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers)
                 .reduce((nextState, key) => {
                   nextState[key] = reducers[key](state[key], action);
                   return nextState;
                 }, {});
  };
};

/*
 * "the reduce field used for `state.todos` will be updated
 * using the todos reducer"
 * convention: name reducers after the state keys they manage
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

/*
 * create redux store
 */
const store = createStore(todoApp);

const logState = () => {
  console.log(`Current state: ${JSON.stringify(store.getState())}`);
};

logState();
console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});

logState();

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Groceries'
});

logState();

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});

logState();


/*
describe('todos', () => {
  it('adds a todo', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('toggles a todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false
      }
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: true
      }
    ];

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
*/
