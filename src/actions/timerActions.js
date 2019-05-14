export const createTimer = (timer, date) => {
  return (dispatch, getState, {getFirebase, getFirestore}) =>  {
    const firestore = getFirestore();
    firestore.collection('timers').add({
      time: timer,
      reflection: '',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TIMER', timer, date });
    }).catch(() => {
      dispatch({ type: 'CREATE_TIMER_ERROR', err })
    })
  }
};
