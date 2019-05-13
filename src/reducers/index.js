import { combineReducers } from 'redux';
import pomodoroTimerReducer from './pomodoro-timer';

const rootReducer = combineReducers({
  pomodoroTimer: pomodoroTimerReducer,
});

export default rootReducer;
