export const createTimer = (timer, date) => {
  return (dispatch, getState, {getFirebase, getFirestore}) =>  {
    const firestore = getFirestore();
    firestore.collection('timers').add({
      ...timer
    }).then(() => {
      dispatch({ type: 'CREATE_TIMER', timer, date });
    }).catch(() => {
      dispatch({ type: 'CREATE_TIMER_ERROR', err })
    })
  }
};
