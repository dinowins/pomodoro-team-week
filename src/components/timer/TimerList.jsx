import React from 'react';
import TimerSummary from './TimerSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


function TimerList({timers, users, auth}){
  console.log(auth)
  return(
    <div>
      <h3>Your Past Timers</h3>
      <div>
  { timers && Object.keys(timers).map (timer => {
    let currentTimer = timers[timer]
    if (auth.uid === currentTimer.authorId) {
    return (
      <Link to={'/timer/' + currentTimer.id}>
      <TimerSummary timer={currentTimer} key={timer} />
      </Link>
    )
  }
  })}
</div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    timers: state.firestore.ordered.timers,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users
  }
}

  export default compose(
    connect (mapStateToProps),
    firestoreConnect([
      {
        collection: 'timers', limit: 5, orderBy: ['createdAt', 'desc']
      },
      {
        collection: 'users'
      }])
  )(TimerList);
