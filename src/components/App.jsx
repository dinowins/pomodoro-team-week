import React from "react";
import Timer from './timer/Timer';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Navbar from './layout/Navbar';
import Profile from './layout/Profile';
import { HashRouter, Switch, Route } from 'react-router-dom';
import TimerList from './timer/TimerList';
import TimerDetail from './timer/TimerDetail'
import TimerSummary from './timer/TimerSummary';
import dogBackground from '../assets/images/dogBackground.jpg';

function App(){
  var backgroundDog = {
    backgroundImage: `url(${dogBackground})`,
    height: '100vh',
    }
  return (
    <div style={backgroundDog}>
      <HashRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Timer}/>
            <Route path='/timer/:id' component={TimerDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={TimerList} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
