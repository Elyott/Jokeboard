import React, { Component } from 'react';
import UserForm from './UserForm';

class Login extends Component {

  onSubmit = (values) => {
    console.log(values);
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


export default Login;