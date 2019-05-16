import React from 'react';
import TimerSummary from './TimerSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


function TimerList({timers, users, auth}){
  var center = {
    textAlign: 'center',
    width: '50%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white'
  }
  var outer = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
  return(
    <div style={outer}>
      <div className="card-panel teal lighten-2" style={center}>
        <h3>Your Past Timers</h3>
        <div>
    { timers && Object.keys(timers).map ((timer, index) => {
      let currentTimer = timers[timer]
      if (auth.uid === currentTimer.authorId) {
      return (
        <Link style={{ color: 'inherit' }} to={'/timer/' + currentTimer.id}>
          <TimerSummary key={index} timer={currentTimer} id={currentTimer.id}/>
        </Link>
      )
    }
    })}
      </div>
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
        collection: 'timers', limit: 7, orderBy: ['createdAt', 'desc']
      },
      {
        collection: 'users'
      }])
  )(TimerList);
