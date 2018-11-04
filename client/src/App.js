import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles/App.scss';

import NavBar from './NavBar';
import Jokes from './JokeBook';
import NewJoke from './NewJoke';
import UpdateJoke from './UpdateJoke';
import Setlists from './Setlists';


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/jokes' component={Jokes}/>
          <Route path='/newjoke' component={NewJoke}/>
          <Route path='/setlists' component={Setlists}/>
          <Route path='/updatejoke' component={UpdateJoke}/>
        </Switch>
      </div>
    );
  }
}

export default App;
