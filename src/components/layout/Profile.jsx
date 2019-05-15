import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function Profile(props){

  console.log(props.timers)



  return(
    <div>
      <h5>Email: {props.auth.email}</h5>
      <h5>Past Timers
        { props.timers && Object.keys(props.timers).map (timer => {
          let currentTimer = props.timers[timer]
          return (
            <p key={timer}>{currentTimer}</p>
          )
        })}</h5>
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
  )(Profile);
