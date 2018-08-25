import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
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
    );
  }
}
export default NavBar;