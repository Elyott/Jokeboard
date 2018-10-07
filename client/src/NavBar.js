import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">JOKERNAUT</a>
        <div className="buttons">
          <div className="nav_button">
            <a>Add Joke</a>
          </div>
          <div className="nav_button">
            <a>Jokebook</a>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;