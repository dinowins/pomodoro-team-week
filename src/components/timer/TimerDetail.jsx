import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'


const TimerDetail = (props) => {
  const { timer } = props;
  if (timer) {
    return (
    <div>
      <div>
        <div>
          <span>{ timer.reflection }</span>
          <p>{ timer.time }</p>
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
    timer: timer
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'timers'}
  ])
)(TimerDetail)
