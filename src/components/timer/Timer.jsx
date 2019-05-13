import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
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
    console.log(this.state.time)
    let newTime = this.state.time.subtract(1, 'seconds');
    this.setState({time: newTime});
  }

  startTimer() {
    const setTime = new Moment.duration(25, 'minutes');
    this.setState({time: setTime})
    console.log(this.state.time)
    setInterval(() => {
      this.updateTimer()
    },1000)
  }

  render() {
    return(
      <div>
        <h1>Timer works</h1>
        <button type='button' onClick={this.startTimer}>Start Focusing</button>
        {this.state.time._data.minutes} : {this.state.time._data.seconds}
      </div>
    );
  }
}

export default Timer;
