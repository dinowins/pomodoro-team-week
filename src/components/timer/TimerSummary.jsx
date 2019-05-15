import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const TimerSummary = ({timer}) => {


  return (
      <div>
        <p>Past Timers</p>
        <div className="timer-summary">
          <span className="author">Author: {timer.authorFirstName} {timer.authorLastName}</span>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(TimerSummary)
