import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const TimerSummary = ({timer}) => {


  return (
      <div>
        <div className="timer-summary">
          <span className="author">Author: {timer.authorFirstName}</span>
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
