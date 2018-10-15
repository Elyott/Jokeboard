import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles/App.scss';

import NavBar from './NavBar';
import Jokes from './JokeBook';
import NewJoke from './NewJoke'


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/jokes' component={Jokes}/>
          <Route path='/newjoke' component={NewJoke}/>
        </Switch>
      </div>
    );
  }
}

export default App;
