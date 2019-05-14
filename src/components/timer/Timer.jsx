import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
// import MomentDurationFormat from 'moment-duration-format';
import ReactAudioPlayer from 'react-audio-player';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      timer: null,
      count: 1,
      display: null,
      stop: false,
      stopButton: null,
    }
    this.updateTimer = this.updateTimer.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.checkPause = this.checkPause.bind(this);
  }

  componentWillMount() {
    const setTime = new Moment.duration(25, 'minutes');
    this.setState({time: setTime});
    let newDisplay = <div><button className="focusButton" type='button' onClick={() => this.startTimer(5)}>Start Focusing</button></div>
    this.setState({display: newDisplay})
  }

  updateTimer() {
    // console.log(this.state.time)
    let newTime = this.state.time.subtract(1, 'seconds');
    let newDisplay;
    this.setState({time: newTime});
    setInterval(this.checkPause, 1000);
    if (this.state.time._data.minutes === 0 && this.state.time._data.seconds === 0) {
      // <audio>
      //   <source src='../audio/the-little-dwarf.mp3' type='audio/mpeg'>
      // </audio>
      clearInterval(this.state.timer)
      let newCount = this.state.count + 1;
      this.setState({count: newCount});
      if (this.state.count % 8 === 0) {
        newDisplay = <div><button type='longBreakButton' onClick={() => this.startBreak(10)}>Long Break</button></div>
        this.setState({display: newDisplay})
        console.log('long break');
      }
      else if (this.state.count % 2 === 0) {
        newDisplay = <div><button type='button' onClick={() => this.startBreak(5)}>Short Break</button></div>
        this.setState({display: newDisplay})
        console.log('short break');
      } else {
        newDisplay = <div><button className="focusButton" type='button' onClick={() => this.startTimer(5)}>Start Focusing</button></div>
        this.setState({display: newDisplay})
        console.log('focus');
      }
    }
    if (this.state.stop === false) {
      let pauseButton = <div><button type='button' onClick={() => {
          this.setState({stop: true});
          clearInterval(this.state.timer);
        }}>Pause</button></div>
      this.setState({stopButton: pauseButton});
    }
  }

  checkPause() {
    if (this.state.stop === false) {
      let pauseButton = <div><button type='button' onClick={() => {
          this.setState({stop: true});
          clearInterval(this.state.timer);
        }}>Pause</button></div>
      this.setState({stopButton: pauseButton});
    } else if (this.state.stop === true) {
      let resumeButton = <div><button type='button' onClick={() => {
          this.setState({stop: false});
          let resumeTimer = setInterval(this.updateTimer, 1000);
          this.setState({timer: resumeTimer})
        }}>Resume</button></div>
      this.setState({stopButton: resumeButton});
    }
    if (this.state.time._data.minutes === 0 && this.state.time._data.seconds === 0) {
      let stopDisplay = null;
      this.setState({stopButton: stopDisplay});
    }
  }

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
        <audio />
        {this.state.time._data.minutes} : {this.state.time._data.seconds}
        {this.state.display}
        {this.state.stopButton}
      </div>
    );
  }
}

export default Timer;


// <ReactAudioPlayer
//   src='../../audio/the-little-dwarf.mp3'
//   autoPlay
//   controls />
// console.log('timer');
