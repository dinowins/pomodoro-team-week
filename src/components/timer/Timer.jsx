import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      timer: null,
      count: 1,
      display: null,
    }
    this.updateTimer = this.updateTimer.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentWillMount() {
    const setTime = new Moment.duration(25, 'minutes');
    this.setState({time: setTime});
    let newDisplay = <div><button className="focusButton" type='button' onClick={() => this.startTimer(1)}>Start Focusing</button></div>
    this.setState({display: newDisplay})
  }

  updateTimer() {
    // console.log(this.state.time)
    let newTime = this.state.time.subtract(1, 'seconds');
    let newDisplay;
    this.setState({time: newTime});
    if (this.state.time._data.minutes === 0 && this.state.time._data.seconds === 0) {
      clearInterval(this.state.timer)
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
      if (this.state.count % 8 === 0) {
        newDisplay = <div><button type='longBreakButton' onClick={() => this.startBreak(10)}>Long Break</button></div>
        this.setState({display: newDisplay})
        console.log('long break');
      }
      else if (this.state.count % 2 === 0) {
        newDisplay = <div><button type='button' onClick={() => this.startBreak(1)}>Short Break</button></div>
        this.setState({display: newDisplay})
        console.log('short break');
      } else {
        newDisplay = <div><button className="focusButton" type='button' onClick={() => this.startTimer(1)}>Start Focusing</button></div>
        this.setState({display: newDisplay})
        console.log('focus');
      }
    }
    console.log(this.state.count);
  }


  // displayButton() {
  //   let showClass = 'showClass',
  //   let hideClass = 'hideClass',
  //   if (this.state.count % 7 === 0) {
  //     longBreakButton
  //   }
  // }

  startTimer(number) {
    const setTime = new Moment.duration(number, 'seconds');
    this.setState({time: setTime})
    // console.log(this.state.time)
    let timerStart = setInterval(() => {
      this.updateTimer()
    },1000)
    this.setState({timer: timerStart})
    this.setState({display: null});
  }

  startBreak(number) {

    const setTime = new Moment.duration(number, 'seconds');
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
        {this.state.display}
      </div>
    );
  }
}

export default Timer;

// <button className="focusButton" type='button' onClick={() => this.startTimer(25)}>Start Focusing</button>
//
// <button type='longBreakButton' onClick={() => this.startBreak(15)}>Long Break</button>
