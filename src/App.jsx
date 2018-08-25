import React, {Component} from 'react';

class App extends Component {

  constructor(){
    super();



  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">JOKERNAUT</a>
          <div className="buttons">
            <div className="home_button">
              <a>Add Joke</a>
            </div>
            <div className="notebook_button">
              <a>Notebook</a>
            </div>
          </div>
        </nav>


      </div>
    );
  }
}
export default App;
