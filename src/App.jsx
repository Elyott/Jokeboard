import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import JokeBook from './JokeBook';

class App extends Component {
  constructor(){
    super();
  }

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
