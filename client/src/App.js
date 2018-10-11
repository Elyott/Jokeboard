import React, { Component } from 'react';
import './styles/App.scss';

import NavBar from './NavBar';
import JokeBook from './JokeBook';


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <JokeBook />
      </div>
    );
  }
}

export default App;
