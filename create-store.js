const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => { console.log('Getting state.'); return state; };

  const dispatch = (action) => {
    console.log(`Dispatching action: ${JSON.stringify(action)}`);
    state = reducer(state, action);
    // notify every change listener
    listeners.forEach(listener => listener());
  };

  /*
   * subscribe a listener for the store.
   * we can have multiple change listeners.
   */
  const subscribe = (listener) => {
    console.log('Subscribing listener.');
    listeners.push(listener);

    // return an unsubscribe handler
    return () => {
      console.log('Unsubscribing listener.');
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // to get reducer to return initial value
  dispatch({});

  return { getState, dispatch, subscribe };
}

const store = createStore(counter);

const stateUpdateCallback = () => {
  console.log('State update callback.');
  console.log(store.getState());
};

store.subscribe(stateUpdateCallback);
store.dispatch({ type: 'INCREMENT' });
