import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


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

  startTimer(number) {
    const setTime = new Moment.duration(number, 'minutes');
    this.setState({time: setTime})
    // console.log(this.state.time)
    let timerStart = setInterval(() => {
      this.updateTimer()
    },1000)
    this.setState({timer: timerStart})
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
    return(
      <div>
        <h1>Timer works</h1>
        {this.state.time._data.minutes} : {this.state.time._data.seconds}
        <button className="focusButton" type='button' onClick={() => this.startTimer(25)}>Start Focusing</button>
        <button className="shortBreakButton" type='button' onClick={() => this.startBreak(5)}>Short Break</button>
        <button type='longBreakButton' onClick={() => this.startBreak(15)}>Long Break</button>
      </div>
    );
  }
}

export default Timer;
