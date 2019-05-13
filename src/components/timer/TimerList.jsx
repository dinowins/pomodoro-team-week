import React from 'react';
import TimerSummary from './TimerSummary';


function TimerList({timers}){
  return(
    <div>
      { timers && timers.map(timer => {
        return (
          <TimerSummary timer={timer} key={timer.id} />
        )
      })}
    </div>
  )
}

export default TimerList;
