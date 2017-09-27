/*
 * state is list of todos indexed by id 
 * if action has a response field, it's been
 * through normalizr
 */
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }

  return state;
};

export default byId;

/*
 * state corresponds to the same state as byId reducer
 */
export const getTodo = (state, id) => state[id];
