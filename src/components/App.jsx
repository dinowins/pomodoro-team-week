import React from "react";
import Timer from './timer/Timer';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Navbar from './layout/Navbar';
import { HashRouter, Switch, Route } from 'react-router-dom';
import TimerList from './timer/TimerList';
import TimerDetail from './timer/TimerDetail';

function App(){
  return (
    <div>
      <HashRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Timer}/>
            <Route path='/timer/:id' component={TimerDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
