import React, { Component } from 'react';
import UserForm from './UserForm';

class SignUp extends Component {

  onSubmit = (values) => {
    console.log(values);
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
export default SignUp;