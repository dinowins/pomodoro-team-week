import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import { editReflection } from '../../actions/timerActions'



const TimerDetail = (props) => {
  const { timer } = props;
  const { auth } = props;
  const { timers } = props;

  const style = {
    textAlign: 'center',
    border: 'solid gray 1px',
    padding: '4%',
    width: '70%',
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    color: 'black'
  }

  let _content = null;

  function updateTimer(event) {
    event.preventDefault();
    let reflection = {reflection: _content.value}
    console.log(timer)
    console.log(timers)
    let id = timers[id]
    props.editReflection('TIgT6lImTqiiPAaENoOZ',reflection)
  }


  if (!auth.uid) return <Redirect to='/signin' />
  if (timer) {
    return (
    <div style={style}>
      <div>
        <div>
          <h4>Timer Detail</h4>

            <form onSubmit={updateTimer}>
              <input type='text'
                id='content'
                placeholder='Reflection...'
                ref={(input) => {_content = input;}}/>
              <button type='submit'>Submit</button>
            </form>

          <span>Reflection: { timer.reflection.reflection }</span>
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
    timers: state.firestore.ordered.timers,
    auth: state.firebase.auth
  }
}
  const mapDispatchToProps = (dispatch) =>{
    return {
      editReflection: (timer, reflection) => dispatch(editReflection(timer, reflection))
    }
  }



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'timers'}
  ])
)(TimerDetail)
