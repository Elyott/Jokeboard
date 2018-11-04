import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to='/' className="navbar-brand">JOKEBOOK</Link>
        <div className="buttons">
            <Link to='/newjoke' className="nav_button">New Joke</Link>
            <Link to='/setlists' className="nav_button">Setlists</Link>
            <Link to='/jokes' className="nav_button">Jokes</Link>
        </div>
      </nav>
    );
  }
}
export default NavBar;