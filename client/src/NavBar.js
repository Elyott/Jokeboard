import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to='/' className="navbar-brand">JOKEBOOK</Link>
        <div className="buttons">
          <Logout />
          <Link to='/signup' className="nav_button">Sign Up</Link>
          <Link to='/login' className="nav_button">Login</Link>
          <Link to='/newjoke' className="nav_button">New Joke</Link>
          <Link to='/setlists' className="nav_button">Setlists</Link>
          <Link to='/jokes' className="nav_button">Jokes</Link>
        </div>
      </nav>
    );
  }
}
export default NavBar;