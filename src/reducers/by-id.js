/*
 * state is list of todos indexed by id 
 */
const byId = (state = {}, action) => {
  /*
   * top level reducer for todos
   * delegates logic to the `todo` reducer
   */
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default: return state;
  }
};

export default byId;

/*
 * state corresponds to the same state as byId reducer
 */
export const getTodo = (state, id) => state[id];
