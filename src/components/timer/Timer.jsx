import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import TimerList from './TimerList'
import { createTimer } from '../../actions/timerActions'


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      timer: null,
      count: 0,
    }
    this.updateTimer = this.updateTimer.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentWillMount() {
    const setTime = new Moment.duration(25, 'minutes');
    this.setState({time: setTime});
  }

  updateTimer() {
    // console.log(this.state.time)
    let newTime = this.state.time.subtract(1, 'seconds');
    this.setState({time: newTime});
    if (this.state.time._data.minutes === 0 && this.state.time._data.seconds === 0) {
      clearInterval(this.state.timer)
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
      console.log(this.state.count);
    }
  }

  displayButton() {
    if (this.state.count % 7 === 0) {
      longBreakButton
    }
  }

  startTimer(number, date) {
    const setTime = new Moment.duration(number, 'minutes');
    date = new Date();
    this.setState({time: setTime})
    // console.log(this.state.time)
    let timerStart = setInterval(() => {
      this.updateTimer()
    },1000)
    this.setState({timer: timerStart})
    this.props.createTimer(number, date)
  }

  startBreak(number) {
    const setTime = new Moment.duration(number, 'minutes');
    this.setState({time: setTime})
    // console.log(this.state.time)
    let timerStart = setInterval(() => {
      this.updateTimer()
    },1000)
    this.setState({timer: timerStart})
  }

  render() {
    const { timers } = this.props;

    console.log(this.props)
    return(
      <div>
        <h1>Timer works</h1>
        {this.state.time._data.minutes} : {this.state.time._data.seconds}
        <div>
            <TimerList timers={timers} />
        </div>
        <button className="focusButton" type='button' onClick={() => this.startTimer(25, 0)}>Start Focusing</button>
        <button className="shortBreakButton" type='button' onClick={() => this.startBreak(5)}>Short Break</button>
        <button type='longBreakButton' onClick={() => this.startBreak(15)}>Long Break</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    createTimer: (timer, date) => dispatch(createTimer(timer, date))
  }
}

const mapStateToProps = (state) => {
  return{
    timers: state.timer.timers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
