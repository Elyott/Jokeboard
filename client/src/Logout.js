import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions';

class Logout extends Component {

  onSubmit = (values) => {
    this.props.logoutUser(() => {
      this.props.history.push('/login');
    });
  }

  render() {
    return (
      <button className="nav_button">
        Logout
      </button>
    );
  }
}


export default connect(null,{ logoutUser })(Logout);