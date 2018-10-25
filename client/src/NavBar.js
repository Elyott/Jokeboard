import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to='/' className="navbar-brand">JOKEBOOK</Link>
        <div className="buttons">
          <div className="nav_button">
            <Link to='/newjoke'>New Joke</Link>
          </div>
          <div className="nav_button">
            <Link to='/jokes'>Jokes</Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;