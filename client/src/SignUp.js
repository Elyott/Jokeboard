import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { createUser } from './actions';

class SignUp extends Component {

  onSubmit = (values) => {
    this.props.createUser(values, () => {
      this.props.history.push('/jokes');
    });
  }

  render() {
    return (
      <div>
        <UserForm
          onSubmit={this.onSubmit}
          title={"Sign Up"}
          message={'Already have an account? '}
          linkButton={'Login'}
          linkRoute={'/login'}
        />
      </div>
    );
  }
}

export default connect(null,{ createUser })(SignUp);