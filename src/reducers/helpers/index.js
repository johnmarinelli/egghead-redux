
/*
 * load value from local storage
 */
export const loadState = () => {
  /*
   * calls to localStorage can fail if user privacy mode prevents it
   */
  try {
    const serializedState = localStorage.getItem('state');
    if (null === serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/*
 * save state to storage
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.err(err);
  }
}

