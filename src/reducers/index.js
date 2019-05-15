import { combineReducers } from 'redux';
import pomodoroTimerReducer from './pomodoro-timer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import timerReducer from './timerReducer'


const rootReducer = combineReducers({
  pomodoroTimer: pomodoroTimerReducer,
  timer: timerReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  // theme: themeReducer
});

export default rootReducer;
