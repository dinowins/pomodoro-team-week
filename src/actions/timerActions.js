export const createTimer = (timer) => {
  return (dispatch, getState) =>  {
    dispatch({ type: 'CREATE_TIMER', timer });
  }
};
