export const createTimer = (timer, date) => {
  return (dispatch, getState, {getFirebase, getFirestore}) =>  {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('timers').add({
      time: timer,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      reflection: '',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TIMER', timer, date });
    }).catch(() => {
      dispatch({ type: 'CREATE_TIMER_ERROR', err })
    })
  }
};


export const editReflection = (timer, reflection) => {
  return (dispatch, getState, {getFirebase, getFirestore}) =>  {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('timers').doc(timer).update({
      reflection: reflection
    }
    ).then(() => {
      dispatch({ type: 'UPDATE_TIMER', timer, date });
    }).catch(() => {
      dispatch({ type: 'CREATE_TIMER_ERROR'})
    })
  }
};
