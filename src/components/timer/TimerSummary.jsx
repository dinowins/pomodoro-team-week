import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const TimerSummary = ({timer}) => {


  console.log(timer)
  return (
      <div>
        <div className="timer-summary">
          <span className="author">Length: {timer.time}</span>
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
