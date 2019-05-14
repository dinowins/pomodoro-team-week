import React from 'react';
import TimerSummary from './TimerSummary';
import { Link } from 'react-router-dom';


function TimerList({timers}){
  return(
    <div>
      { timers && Object.keys(timers).map (timer => {
        let currentTimer = timers[timer]
        return (
          <Link to={'/timer/' + currentTimer.id}>
          <TimerSummary timer={currentTimer} key={currentTimer.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default TimerList;
