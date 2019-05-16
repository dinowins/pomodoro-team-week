import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import moment from 'moment'

const TimerSummary = ({id,timer}) => {

var style = {
  textAlign: 'left',
  border: 'solid gray 1px',
  padding: '2%',
  marginBottom: '4%',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: 'black'
}

  console.log(id)
  return (
      <div>
        <div className="timer-summary" style={style}>
          <span className="author">Timer Length: {timer.time} <br/> Created {moment(timer.createdAt.toDate()).calendar()}</span>
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
