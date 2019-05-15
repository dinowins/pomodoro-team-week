import React from 'react';
import TimerSummary from './TimerSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


function TimerList({timers}){
  return(
    <div>
      { timers && Object.keys(timers).map (timer => {
        let currentTimer = timers[timer]
        return (
          <Link to={'/timer/' + currentTimer.id}>
          <TimerSummary timer={currentTimer} key={timer} />
          </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(TimerList);
