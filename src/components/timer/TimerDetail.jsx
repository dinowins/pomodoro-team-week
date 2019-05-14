import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'
import { Redirect } from 'react-router-dom'


const TimerDetail = (props) => {
  const { timer } = props;
  const { auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />
  if (timer) {
    return (
    <div>
      <div>
        <div>
          <span>Reflection: { timer.reflection }</span>
          <p>Time: { timer.time }</p>
        </div>
        <div>
          <div>{moment(timer.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div>
        <p>loading timer...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const timers = state.firestore.data.timers;
  const timer = timers ? timers[id] : null
  return {
    timer: timer,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'timers'}
  ])
)(TimerDetail)
