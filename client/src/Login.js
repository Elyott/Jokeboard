import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { loginUser } from './actions';

class Login extends Component {

  onSubmit = (values) => {
    this.props.loginUser(values, () => {
      this.props.history.push('/jokes');
    });
  }

  render() {
    return (
      <div>
        <UserForm
          onSubmit={this.onSubmit}
          title={'Login'}
          message={'New to Jokebook? '}
          linkButton={'Create an account'}
          linkRoute={'/signup'}
        />
      </div>
    );
  }
}


export default connect(null,{ loginUser })(Login);